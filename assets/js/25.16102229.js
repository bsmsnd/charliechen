(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{308:function(e,t,s){"use strict";s.r(t);var n=s(14),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ssh连接失败的问题和解决思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh连接失败的问题和解决思路"}},[e._v("#")]),e._v(" SSH连接失败的问题和解决思路")]),e._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),t("p",[e._v("最近笔者换了一台新的MacBook Pro M3 Pro 2023（不得不说，比Macbook Pro 2019 Intel I9的发热情况的改善不是一星半点，太香了！），重新整理代码仓库的时候发现，GitHub无法通过SSH连接了。这里记录下问题和最终的解决方案，供大家参考。")]),e._v(" "),t("h2",{attrs:{id:"事故现场"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事故现场"}},[e._v("#")]),e._v(" 事故现场")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("尝试克隆仓库失败")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("~ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:noahgift/flask-random-fruit.git\n\nCloning into "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'flask-random-fruit'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nConnection closed by "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("140.82")]),e._v(".112.3 port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("\nfatal: Could not "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" from remote repository.\n\nPlease "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" sure you have the correct access rights\nand the repository exists.\n")])])])]),e._v(" "),t("li",[t("p",[e._v("检查 ssh key 是否正确录入GitHub系统，且本地文件权限正确配置")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("(1) Correct Permissions")])]),e._v(" "),t("ul",[t("li",[t("strong",[t("code",[e._v(".ssh")]),e._v(" directory:")]),e._v(" "),t("code",[e._v("700")]),e._v(" (owner has read, write, and execute permissions)")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("id_rsa")]),e._v(" (or similar private key file):")]),e._v(" "),t("code",[e._v("600")]),e._v(" (owner has read and write permissions)")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("authorized_keys")]),e._v(":")]),e._v(" "),t("code",[e._v("600")]),e._v(" (owner has read and write permissions)")]),e._v(" "),t("li",[t("strong",[e._v("Other files (e.g., "),t("code",[e._v("known_hosts")]),e._v(", "),t("code",[e._v("config")]),e._v("):")]),e._v(" "),t("code",[e._v("600")]),e._v(" is generally recommended, but you can adjust permissions based on your needs.")])]),e._v(" "),t("p",[t("strong",[e._v("(2) 如何将SSH key添加至GitHub")]),e._v("：参见 "),t("a",{attrs:{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding a new SSH key to your GitHub account - GitHub Docs"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("p",[e._v("通过"),t("code",[e._v("ssh -vT git@github.com")]),e._v("进一步诊断")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("~ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-vT")]),e._v(" github.com\n\nOpenSSH_9.7p1, LibreSSL "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.3")]),e._v(".6\ndebug1: Reading configuration data /Users/xxx/.ssh/config\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\ndebug1: Connecting to github.com port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(".\ndebug1: Connection established.\ndebug1: identity "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" /Users/xxx/.ssh/id_xxx "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\ndebug1: identity "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" /Users/xxx/.ssh/id_xxx-cert "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-1")]),e._v("\ndebug1: Local version string SSH-2.0-OpenSSH_9.7\nkex_exchange_identification: Connection closed by remote "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("\nConnection closed by "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("140.82")]),e._v(".112.3 port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("\n")])])]),t("p",[e._v("其中，"),t("code",[e._v("debug1: identity file /Users/xxx/.ssh/id_xxx type 3")]),e._v("表示用于连接的SSH key已经找到，可用于KEX。")]),e._v(" "),t("p",[t("code",[e._v("debug1: identity file /Users/xxx/.ssh/id_xxx-cert type -1")]),e._v("这一行迷惑性较大，前期投入较长时间分析为什么没有生成对应的问题，后面发现此文件时在提供根证书的情况下才会生成，个人开发者生成的ssh key一般不存在此文件，无需处理。")])]),e._v(" "),t("li",[t("p",[e._v("考虑到SSH key已经找到的情况下仍无法连接，搜索发现存在网络运营商禁用某些端口的情况。")])]),e._v(" "),t("li",[t("p",[e._v("尝试换用443端口 (SSH over HTTPS) 连接GitHub，可以正常认证。")])])]),e._v(" "),t("h2",{attrs:{id:"换用-443-端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换用-443-端口"}},[e._v("#")]),e._v(" 换用 443 端口")]),e._v(" "),t("p",[e._v("打开"),t("code",[e._v("~/.ssh/config")]),e._v("文件，添加如下几行：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Host github.com\n  Hostname ssh.github.com\n  AddKeysToAgent yes\n  UseKeychain yes\n  User git\n  Port 443\n  IdentityFile ~/.ssh/YOUR_PRIVATE_KEY\n")])])]),t("p",[e._v("重新使用"),t("code",[e._v("ssh git@github.com")]),e._v("登录，提示可以正常认证：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("~ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" github.com\n\nPTY allocation request failed on channel "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nHi xxx"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" You've successfully authenticated, but GitHub does not provide shell access.\nConnection to ssh.github.com closed.\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/CoolBoySilverBullet/article/details/135736862",target:"_blank",rel:"noopener noreferrer"}},[e._v("【日常踩坑】解决 kex_exchange_identification 报错_kex exchange identification-CSDN博客"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickey",target:"_blank",rel:"noopener noreferrer"}},[e._v("Error: Permission denied (publickey) - GitHub Docs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using SSH over the HTTPS port - GitHub Docs"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);