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
  <a href="./README.md">English</a> · <a href="./README.KR.md">한국어</a> · <a href="./README_CN.md">简体中文</a> · <strong>日本語</strong>
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
        <em>Webページの要素キャプチャ</em>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/fe0d774b-5b29-4fbd-bc72-c942f19eed90" width="85%" />
        <br />
        <em>macOSプログラムの要素キャプチャ</em>
      </td>
    </tr>
  </table>
</div>

</br>

汎用 UI キャプチャおよびインスペクションツール。

Chrome デベロッパー ツールのインスペクターのように、OS 全体の UI 要素を検査およびキャプチャするための macOS デスクトップ アプリケーションです。

## 主な機能

- **グローバルインスペクター:** 画面上のウィンドウ、ボタン、または UI 要素にマウスを合わせると、ハイライト表示されます。
- **情報 HUD:** UI要素の種類とサイズ（幅×高さ）をリアルタイムで表示します。
- **スマートキャプチャ:** ハイライトされた要素をクリックすると、即座にクリップボードにキャプチャされます。
- **視認性の向上:** 画面の端でもハイライトの枠線が切れずに鮮明に表示されます。
- **システムトレイ統合:** バックグラウンドで静かに実行されます。
- **グローバルショートカット:** 必要に応じてインスペクターを起動できます。

## セットアップとインストール

1.  **リポジトリをクローンする**
2.  **依存関係のインストール:**
    ```bash
    npm install
    ```
3.  **開発ビル드의 実行:**
    ```bash
    npm run tauri dev
    ```

## プロダクションビル드

本番環境用のアプリケーションパッケージをビルドするには：

1.  **標準ビル드:**
    ```bash
    npm run tauri build
    ```

2.  **バージョン指定ビル드:**
    ビル드前に新しいバージョンを指定したい場合：
    ```bash
    npm run build:to --new_version=1.1.0
    ```
    *このコマンドは package.json と Cargo.toml を指定されたバージョンに更新し、ビルドプロセスを実行します。*

生成されたアプリケーションパッケージは `src-tauri/target/release/bundle/` に配置されます。

## 使用方法

1.  **権限の付与:**
    *   初回起動時に、アプリ（または開発モードで実行している場合はターミナル）に **アクセシビリティ (Accessibility)** と **画面収録 (Screen Recording)** の権限を付与する必要があります。
    *   アプリが動作しない場合は、*システム設定 > プライバシーとセキュリティ* を確認し、権限が有効になっていることを確認してください。

2.  **インスペクションの開始:**
    *   アプリは백그라운드で起動します（メニューバーのアイコンを確認してください）。
    *   <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> を押してオーバーレイを有効にします。

3.  **キャプチャ:**
    *   マウスを動かして目的の UI 要素をハイライトします。
    *   **クリック** してキャプチャします。
    *   オーバーレイが閉じ、スクリーンショットが **クリップボード** に保存されます。任意の場所に貼り付けてください (<kbd>Cmd</kbd> + <kbd>V</kbd>)。

4.  **終了:**
    *   メニューバーのトレイアイコンをクリックし、**Quit** を選択します。

## アーキテクチャ

- **フロントエンド:** React + TypeScript (視覚的オーバーレイ)
- **백엔드:** Rust (Tauri, Accessibility API, CoreGraphics)
- **状態管理:** Tauri イベント (`element-hover`)

## ライセンス

[MIT](LICENSE)