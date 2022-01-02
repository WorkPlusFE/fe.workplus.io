

# 通过 cli 创建

`@vitue/cli`是团队内部指定用于创建项目初始架构的 cli 工具，其作用很纯粹，就是下载`vitue-scaffold`组织内的 template 项目。通过`vitue init`可以查询到组织内所有可用的项目模版，选择需要的，即可下载安装到本地目录。

除此之外，没有其他任何功能。

## 安装 cli

通过以下命令进行安装：

```bash
yarn global add @vitue/cli
# or
npm install -g @vitue/cli
```

安装成功后，在 shell 中键入`vitue`，即可查看所有功能说明。

## vitue init

`@vitue/cli`并没有内置任何项目模版，所有模版都来自其 Github 组织上，[vitue-scaffold](https://github.com/vitue-scaffold) 内所有的模版类型项目，都可使用。

执行以下命令：

```bash
w6s init project1
```

此时，cli 会通过网络请求拉取所有的模版项目并展示在列表上，可通过`上下方向键`选择需要的模版即可。

选择模版后，cli 会自动在当前目录下创建 project1 文件夹，并把所选的项目模版生成到 project1 文件夹内，在这之前会有一些人机交互，使用者需要输入一些简单的项目信息：

```bash
# Enter some basic information
? Project name: test
? Project description: hello
? Author: Hejx <test@qq.com>
```

:::caution 注意网络问题

`@vitue/cli`会访问 Github API 及使用 [flippidippi/download-git-repo](https://gitlab.com/flippidippi/download-git-repo#readme) 进行 Github 项目的在线下载，所以请关注下网络的情况，可能会出现超时等问题。

:::

项目创建完成后，需要自行安装依赖及运行项目：

```bash
# 进入目录
cd project1

# 安装依赖
yarn

# 安装成功后，启动服务
yarn dev
```

