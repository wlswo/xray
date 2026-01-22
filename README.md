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
  <strong>English</strong> · <a href="./README.KR.md">한국어</a> · <a href="./README_CN.md">简体中文</a> · <a href="./README_JA.md">日本語</a>
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
        <img src="https://github.com/user-attachments/assets/0968556c-ba2e-40ce-bd75-382f96e563a0" width="100%" />
        <br />
        <em>Web page element capture</em>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/fe0d774b-5b29-4fbd-bc72-c942f19eed90" width="85%" />
        <br />
        <em>MAC OS Program element capture</em>
      </td>
    </tr>
  </table>
</div>

</br>

Universal UI capture and inspection tool.

macOS Desktop application for inspecting and capturing UI elements across the entire system, similar to Chrome DevTools inspector but for the OS.

## Features

- **Global Inspector:** Hover over any window, button, or UI element on your screen to see it highlighted.
- **Info HUD:** Real-time display of element role and dimensions (e.g., `Button | 120 × 40`).
- **Smart Capture:** Click the highlighted element to instantly capture it to your clipboard.
- **Enhanced Visibility:** Inset highlight ensures visibility even at screen edges.
- **System Tray Integration:** Runs quietly in the background.
- **Global Shortcut:** Activate the inspector on demand.

## Setup & Installation

1.  **Clone the repository**
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run Development Build:**
    ```bash
    npm run tauri dev
    ```

## Building for Production

To build a production-ready application bundle:

1.  **Standard Build:**
    ```bash
    npm run tauri build
    ```

2.  **Build with Version Update:**
    If you want to specify a new version before building:
    ```bash
    npm run build:to --new_version=1.1.0
    ```
    *This command will update `package.json` and `Cargo.toml` to the specified version and then run the build process.*

The generated application bundle will be located in `src-tauri/target/release/bundle/`.

## How to Use

1.  **Grant Permissions:**
    *   On first launch, you must grant **Accessibility** and **Screen Recording** permissions to the app (or your terminal if running in dev mode).
    *   If the app doesn't work, check *System Settings > Privacy & Security* and ensure permissions are enabled.

2.  **Start Inspection:**
    *   The app launches in the background (check the Menu Bar for the icon).
    *   Press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> (or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>) to activate the overlay.

3.  **Capture:**
    *   Move your mouse to highlight the desired UI element.
    *   **Click** to capture.
    *   The overlay will close, and the screenshot is now in your **Clipboard**. Paste it anywhere (<kbd>Cmd</kbd> + <kbd>V</kbd>).

4.  **Quit:**
    *   Click the tray icon in the menu bar and select **Quit**.

## Architecture

- **Frontend:** React + TypeScript (Visual Overlay)
- **Backend:** Rust (Tauri, Accessibility API, CoreGraphics)
- **State Management:** Tauri Events (`element-hover`)

## License

[MIT](LICENSE)
