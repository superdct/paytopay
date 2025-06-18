# 网页部署手把手教程 (Netlify)

本文档将指导你如何通过 Netlify 将你的支付网页免费部署到互联网上，并获得一个公开的网址。Netlify 非常适合此类静态网站，它能提供极高的性能和可用性。

## 先决条件

1.  **代码文件**: 确保你的项目文件夹中包含以下文件：
    *   `index.html`
    *   `style.css`
    *   `script.js`

2.  **GitHub 账户**: 你需要一个免费的 GitHub 账户。
3.  **Git**: 你的电脑上需要安装 Git。

---

## 部署步骤

### 第 1 步：将代码上传到 GitHub

首先，我们需要将你的网页代码存放在一个 GitHub 仓库中。

1.  **创建本地 Git 仓库**:
    打开终端（或命令提示符），进入你的项目文件夹，然后运行以下命令：
    ```bash
    # 初始化一个新的 Git 仓库
    git init

    # 将所有文件添加到暂存区
    git add .

    # 创建第一个提交
    git commit -m "Initial commit: Add payment page files"
    ```

2.  **在 GitHub 上创建新仓库**:
    *   访问 [GitHub](https://github.com) 并登录。
    *   点击右上角的 "+" -> "New repository"。
    *   给仓库命名，例如 `payment-page`。
    *   保持仓库为 "Public"（公开）。
    *   点击 "Create repository"。

3.  **将本地代码推送到 GitHub**:
    在 GitHub 创建仓库后，复制页面上提供的 "push an existing repository from the command line" 下的命令，并到你的终端中执行。通常是这样的：
    ```bash
    # 关联你的本地仓库和远程 GitHub 仓库
    git remote add origin https://github.com/你的用户名/payment-page.git

    # 将主分支重命名为 main (如果需要)
    git branch -M main

    # 将代码推送到 GitHub
    git push -u origin main
    ```

### 第 2 步：通过 Netlify 进行部署

现在代码已经在 GitHub 上了，我们可以使用 Netlify 来部署它。

1.  **注册/登录 Netlify**:
    *   访问 [Netlify](https://www.netlify.com/) 官网。
    *   选择 "Sign up"，并使用你的 GitHub 账户进行注册，这会非常方便。

2.  **从 Git 创建新站点**:
    *   登录后，你会看到你的 Dashboard。点击 "Add new site" -> "Import an existing project"。
    *   在 "Connect to Git provider" 页面，选择 "GitHub"。
    *   授权 Netlify 访问你的 GitHub 仓库。

3.  **选择你的仓库**:
    *   在仓库列表中，找到并选择你刚刚创建的 `payment-page` 仓库。

4.  **配置部署设置**:
    *   **Netlify 会自动检测到这是一个静态网站，所以大部分设置你都无需更改。**
    *   **Build command**: 留空。
    *   **Publish directory**: 留空 (或者填写 `.` 表示根目录)。
    *   确认无误后，点击 "Deploy site"。

5.  **部署完成**:
    *   Netlify 会立即开始部署你的网站。整个过程通常不到一分钟。
    *   部署成功后，Netlify 会为你生成一个随机的网址（例如 `random-name-12345.netlify.app`）。你可以直接点击这个链接来访问你的支付网页。

### 第 3 步 (可选): 自定义域名

如果你想使用一个更专业的网址，可以在 Netlify 的 "Domain settings" 中进行设置。你可以：
*   更改 Netlify 提供的子域名 (例如，改为 `starriver-pay.netlify.app`)。
*   绑定一个你已经购买的域名 (例如 `pay.yourdomain.com`)。

---

## 结论

部署完成！你的支付网页现在已经上线，可以被全球任何人访问。Netlify 的全球 CDN 会确保无论用户在哪里，都能快速加载页面，轻松应对高并发访问请求。 