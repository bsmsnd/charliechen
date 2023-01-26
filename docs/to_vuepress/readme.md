---
home: false
lang: zh-CN
sidebar: false
title: 迁移至 VuePress
footer: GPU GPL v3 Licensed | Copyright (c) 2022-2023 Charlie Chen
---

# 迁移至 VuePress

## 为什么迁移

#### 算笔经济账

之前用WordPress搭建了个人网站`charliechen.cn`，除维护投入的时间成本外，搭建的成本主要是域名和服务器费用。

| 项目                           | 费用            |
| ------------------------------ | --------------- |
| 域名                           | 35 元 / 年      |
| 服务器（腾讯云，标准型S2）[^1] | 2,052 元 / 3 年 |

#### 个人维护成本

在网站开通的几年间，尽管此网站不存储任何个人信息，但仍遭遇过一次DDoS攻击，导致服务器瘫痪。后来在腾讯客服小姐姐的帮助下才得以恢复。这个过程学到了很多，但是也让我看到了网站运营不易。

此外，由于个人网站预算有限，云服务器算力和带宽有限，因此每次网页的访问或文章上传成本较高。插件的使用（我主要使用的插件是Jetpack，从文章编辑和网站监控等方面提供了丰富的支持）更加剧了这一困境。

基于上面的两点考虑，我一直在寻找个人博客的替代方案。这个时候，GitHub Pages成为了一个不错的选择。加之我平时文档大都使用Markdwn，VuePress作为MD文档的静态网站生成器兼具易用性和可拓展性，用这一组合托管文档再合适不过。

>   [Jekyll](https://jekyllrb.com)是GitHub官方推荐的GitHub Pages的网站“生成器”。这个[网页](https://stackshare.io/stackups/hugo-vs-jekyll-vs-vuepress)提供了两个工具的比较。

## VuePress + GitHub Pages + GitHub Actions 如何搭建

GitHub Pages本质是一个静态网站托管。它会主动取用仓库文件作为网站文件发送给访问者。VuePress则是一个静态网站的“生成器”，可以将MD文档转化成静态的HTML页面。

### Getting Started

[VuePress官网](https://vuepress.vuejs.org/guide/getting-started.html)提供了非常完整的入门教程，对于新手非常友好。为了避免后续部署出现问题，我在这个位置还创建了一个Ubuntu的虚拟机，用以测试网站部署的效果。仅验证网站部署情况的话，只需看完官方指南的[“快速上手”](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B)部分，能够正确在本地启动即可。

### 部署到GitHub Pages

在VuePress官方教程中提供了[部署到GitHub Pages](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)的完整步骤。这一步所创建的脚本`deploy.sh`可以整合在CI中，从而在每次`git push`时可以自动执行生成静态网站的脚本。不论部署的域名是什么，都推荐将静态网址生成的内容保存到`gh-pages`分支上，以避免和`main`分支作用重叠。

要将部署步骤整合到CI中，GitHub提供的GitHub Actions可以做到。但官方提供的范例YAML文件可用性不高。这里整理下亲测可用步骤。

1.   创建 [Github access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

2.   在GitHub仓库设置中的Actions secrets and variables，创建一个Repository secrets，填入刚创建的 `token`，将Name设为`ACCESS_TOKEN`。

3.   确认在`package.json`目录下，已经添加了Getting Started步骤中要求添加的脚本。

     ```json
     {
       "scripts": {
         "docs:dev": "vuepress dev docs",
         "docs:build": "vuepress build docs"
       }
     }
     ```

4.   在仓库中创建`.github/workflows`目录，并创建`vuepress-deploy.yml`文件。[^2]

     ```yaml
     # name 可以自定义
     name: Deploy to GitHub Pages
     
     # 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
     on:
       push:
         branches:
           - main
     
     # 任务
     jobs:
       build-and-deploy:
         # 服务器环境：最新版 Ubuntu
         runs-on: ubuntu-latest
         steps:
           # 拉取代码
           - name: Checkout
             uses: actions/checkout@v2
             with:
               persist-credentials: false
     
           # 生成静态文件
           - name: Build
             run: npm install && npm run docs:build # 如仓库的包管理器是yarn，则应执行yarn && yarn docs:build
     
           # 部署到 GitHub Pages
           - name: Deploy
             uses: JamesIves/github-pages-deploy-action@releases/v3
             with:
               ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 也就是我们刚才生成的 secret
               BRANCH: gh-pages # 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件
               FOLDER: docs/.vuepress/dist # vuepress 生成的静态文件存放的地方
     
     ```

5.   将上述修改提交至main分支，稍等几分钟可以看到Action执行完毕，并自动将生成的文件推送至`gh-pages`。
6.   设置GitHub Pages。在仓库设置中的“Pages”，选择Source为Deploy from a branch，并将对应的branch设置为`gh-pages`，即部署使用的分支名称。

## 后续

国内访问GitHub愈发堪忧，在这篇文章写作过程中，我访问此仓库基本都是超时的。在切换至GitHub Pages后可能会导致受众变化（特别是考虑到，我之前的网址是`.cn`，有完整备案的）。注意到gitee可以提供相似的服务，后续会考虑在多平台推送以保证国内可以正常访问。

GitHub Pages还支持自定义域名，这也让我开始考虑启用新的域名。

## References

1.   [为什么你的WordPress网站速度那么慢？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/365548465)
2.   [Vuepress + GitHub Actions 实现博客自动部署！ - 掘金 (juejin.cn)](https://juejin.cn/post/7000572105154625567)

## Notes

[^1]: 价格取自2023年1月26日腾讯云服务器CVM-标准型S2广州区。价格可能变化。
[^2]: YML文件来源[Vuepress + GitHub Actions 实现博客自动部署！ - 掘金 (juejin.cn)](https://juejin.cn/post/7000572105154625567)