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
  <a href="./README.md">English</a> · <strong>한국어</strong> · <a href="./README_CN.md">简体中文</a> · <a href="./README_JA.md">日本語</a>
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
        <em>웹 페이지 요소 캡처</em>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/fe0d774b-5b29-4fbd-bc72-c942f19eed90" width="85%" />
        <br />
        <em>맥 OS 프로그램 요소 캡처</em>
      </td>
    </tr>
  </table>
</div>

</br>


범용 UI 캡처 및 분석 도구입니다.

Chrome 개발자 도구의 인스펙터(Inspector)처럼, macOS 전체 시스템의 UI 요소를 검사하고 캡처할 수 있는 데스크톱 애플리케이션입니다.

## 주요 기능

- **글로벌 인스펙터 (Global Inspector):** 화면의 창, 버튼, 또는 모든 UI 요소 위에 마우스를 올리면 해당 영역이 강조 표시됩니다.
- **정보 HUD (Info HUD):** UI 요소의 종류와 크기(가로×세로) 정보를 실시간으로 표시합니다.
- **스마트 캡처 (Smart Capture):** 강조된 요소를 클릭하면 즉시 클립보드로 캡처됩니다.
- **시인성 개선:** 화면 가장자리에서도 하이라이트 테두리가 잘리지 않고 선명하게 보입니다.
- **시스템 트레이 통합:** 백그라운드에서 조용히 실행됩니다.
- **전역 단축키:** 필요할 때 즉시 인스펙터를 활성화할 수 있습니다.

## 설정 및 설치

1.  **저장소 클론 (Clone)**
2.  **의존성 설치:**
    ```bash
    npm install
    ```
3.  **개발 빌드 실행:**
    ```bash
    npm run tauri dev
    ```

## 프로덕션 빌드

배포용 애플리케이션 번들을 빌드하는 방법은 다음과 같습니다.

1.  **표준 빌드:**
    ```bash
    npm run tauri build
    ```

2.  **버전 지정 빌드:**
    빌드 전에 버전을 명시하여 업데이트하고 싶을 때 사용합니다.
    ```bash
    npm run build:to --new_version=1.1.0
    ```
    *이 명령어는 `package.json`과 `Cargo.toml`의 버전을 입력한 값으로 변경한 후 빌드를 진행합니다.*

생성된 애플리케이션 번들은 `src-tauri/target/release/bundle/` 경로에서 확인할 수 있습니다.

## 사용 방법

1.  **권한 허용:**
    *   최초 실행 시, 앱(또는 개발 모드인 경우 터미널)에 **손쉬운 사용(Accessibility)** 및 **화면 기록(Screen Recording)** 권한을 허용해야 합니다.
    *   앱이 작동하지 않는 경우, *시스템 설정 > 개인정보 보호 및 보안*에서 권한이 활성화되어 있는지 확인하세요.

2.  **검사 시작:**
    *   앱은 백그라운드에서 실행됩니다 (메뉴 막대 아이콘 확인).
    *   **`Cmd + Shift + X`** (또는 `Ctrl + Shift + X`)를 눌러 오버레이를 활성화합니다.

3.  **캡처:**
    *   마우스를 움직여 원하는 UI 요소를 강조합니다.
    *   **클릭**하여 캡처합니다.
    *   오버레이가 닫히고, 스크린샷이 **클립보드**에 저장됩니다. 원하는 곳에 붙여넣기(`Cmd + V`) 하세요.

4.  **종료:**
    *   메뉴 막대의 트레이 아이콘을 클릭하고 **Quit**을 선택합니다.

## 아키텍처

- **프론트엔드:** React + TypeScript (시각적 오버레이)
- **백엔드:** Rust (Tauri, Accessibility API, CoreGraphics)
- **상태 관리:** Tauri Events (`element-hover`)

## 라이선스

[MIT](LICENSE)
