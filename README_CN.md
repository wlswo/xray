<p align="center">
  <a href="https://github.com/wlswo/xray">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./assets/xray-logo.png">
      <source media="(prefers-color-scheme: light)" srcset="./assets/xray-logo.png">
      <img alt="Xray Logo" src="./assets/xray-logo.png" width="100%">
    </picture>
  </a>
</p>

<p align="center">
  <img src="https://placehold.co/1000x3/457857/457857.png" width="100%" alt="green line" height="1.2px">
</p>

<br/>

<div align="center">
  <a href="./README.md">English</a> · <a href="./README.KR.md">한국어</a> · <strong>简体中文</strong> · <a href="./README_JA.md">日本語</a>
</div>

<br/>

<p align="center">
  <img src="https://placehold.co/1000x3/457857/457857.png" width="100%" alt="green line" height="1.2px">
</p>

<br/>

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/e15d9ae4-d06d-4130-9564-3e446bc4b6db" width="100%" />
        <br />
        <em>网页元素捕获</em>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/a2f2ce9c-12ae-48af-a5d4-655d2d90baef" width="85%" />
        <br />
        <em>macOS 程序元素捕获</em>
      </td>
    </tr>
  </table>
</div>

</br>

通用 UI 捕获与检查工具。

这是一款用于检查和捕获整个系统 UI 元素的 macOS 桌面应用程序，类似于 Chrome 开发者工具的检查器，但适用于整个操作系统。

## 功能特点

- **全局检查器：** 将鼠标悬停在屏幕上的任何窗口、按钮 or UI 元素上，即可看到高亮显示。
- **智能捕获：** 点击高亮元素即可立即将其捕获到剪贴板。
- **系统托盘集成：** 在后台安静运行。
- **全局快捷键：** 按需激活检查器。

## 设置与安装

1.  **克隆仓库**
2.  **安装依赖：**
    ```bash
    npm install
    ```
3.  **运行开发构建：**
    ```bash
    npm run tauri dev
    ```

## 生产环境构建

要构建生产就绪的应用程序包：

1.  **标准构建：**
    ```bash
    npm run tauri build
    ```

2.  **指定版本构建：**
    如果您想在构建前指定新版本：
    ```bash
    npm run build:to --new_version=1.1.0
    ```
    *此命令将更新 `package.json` 和 `Cargo.toml` 为指定版本，然后执行构建过程。*

生成的应用程序包将位于 `src-tauri/target/release/bundle/`。

## 如何使用

1.  **授予权限：**
    *   首次启动时，必须授予应用（或运行开发模式的终端）**辅助功能 (Accessibility)** 和 **屏幕录制 (Screen Recording)** 权限。
    *   如果应用无法正常工作，请检查 *系统设置 > 隐私与安全* 并确保已启用相关权限。

2.  **开始检查：**
    *   应用在后台启动（检查菜单栏中的图标）。
    *   按下 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> 激活覆盖层。

3.  **捕获：**
    *   移动鼠标以高亮所需的 UI 元素。
    *   **点击**即可捕获。
    *   覆盖层将关闭，截图现已保存在您的**剪贴板**中。您可以将其粘贴到任何地方 (<kbd>Cmd</kbd> + <kbd>V</kbd>)。

4.  **退出：**
    *   点击菜单栏中的托盘图标并选择 **Quit**。

## 架构

- **前端：** React + TypeScript (视觉覆盖层)
- **后端：** Rust (Tauri, Accessibility API, CoreGraphics)
- **状态管理：** Tauri 事件 (`element-hover`)

## 许可证

[MIT](LICENSE)
