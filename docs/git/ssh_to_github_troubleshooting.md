# SSH连接失败的问题和解决思路

## 背景

最近笔者换了一台新的MacBook Pro M3 Pro 2023（不得不说，比Macbook Pro 2019 Intel I9的发热情况的改善不是一星半点，太香了！），重新整理代码仓库的时候发现，GitHub无法通过SSH连接了。这里记录下问题和最终的解决方案，供大家参考。

## 事故现场

1.   尝试克隆仓库失败
     ```bash
     ~ git clone git@github.com:noahgift/flask-random-fruit.git
     
     Cloning into 'flask-random-fruit'...
     Connection closed by 140.82.112.3 port 22
     fatal: Could not read from remote repository.
     
     Please make sure you have the correct access rights
     and the repository exists.
     ```

2.   检查 ssh key 是否正确录入GitHub系统，且本地文件权限正确配置

     >   **(1) Correct Permissions**
     >
     >   -   **`.ssh` directory:** `700` (owner has read, write, and execute permissions)
     >   -   **`id_rsa` (or similar private key file):** `600` (owner has read and write permissions)
     >   -   **`authorized_keys`:** `600` (owner has read and write permissions)
     >   -   **Other files (e.g., `known_hosts`, `config`):** `600` is generally recommended, but you can adjust permissions based on your needs.
     >
     >   **(2) 如何将SSH key添加至GitHub**：参见 [Adding a new SSH key to your GitHub account - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)

3.   通过`ssh -vT git@github.com`进一步诊断
     ```bash
     ~ ssh -vT github.com
     
     OpenSSH_9.7p1, LibreSSL 3.3.6
     debug1: Reading configuration data /Users/xxx/.ssh/config
     ...
     debug1: Connecting to github.com port 22.
     debug1: Connection established.
     debug1: identity file /Users/xxx/.ssh/id_xxx type 3
     debug1: identity file /Users/xxx/.ssh/id_xxx-cert type -1
     debug1: Local version string SSH-2.0-OpenSSH_9.7
     kex_exchange_identification: Connection closed by remote host
     Connection closed by 140.82.112.3 port 22
     ```

     其中，`debug1: identity file /Users/xxx/.ssh/id_xxx type 3`表示用于连接的SSH key已经找到，可用于KEX。

     `debug1: identity file /Users/xxx/.ssh/id_xxx-cert type -1`这一行迷惑性较大，前期投入较长时间分析为什么没有生成对应的问题，后面发现此文件时在提供根证书的情况下才会生成，个人开发者生成的ssh key一般不存在此文件，无需处理。

4.   考虑到SSH key已经找到的情况下仍无法连接，搜索发现存在网络运营商禁用某些端口的情况。

5.   尝试换用443端口 (SSH over HTTPS) 连接GitHub，可以正常认证。

## 换用 443 端口

打开`~/.ssh/config`文件，添加如下几行：

```
Host github.com
  Hostname ssh.github.com
  AddKeysToAgent yes
  UseKeychain yes
  User git
  Port 443
  IdentityFile ~/.ssh/YOUR_PRIVATE_KEY
```

重新使用`ssh git@github.com`登录，提示可以正常认证：

```bash
~ ssh github.com

PTY allocation request failed on channel 0
Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.
Connection to ssh.github.com closed.
```

## 参考资料

1.   [【日常踩坑】解决 kex_exchange_identification 报错_kex exchange identification-CSDN博客](https://blog.csdn.net/CoolBoySilverBullet/article/details/135736862)
2.   [Error: Permission denied (publickey) - GitHub Docs](https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickey)
3.   [Using SSH over the HTTPS port - GitHub Docs](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
