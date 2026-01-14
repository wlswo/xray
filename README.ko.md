# xray

[English](./README.md)

<div align="center">
  <img 
    src="https://github.com/user-attachments/assets/e15d9ae4-d06d-4130-9564-3e446bc4b6db" 
    alt="xray-apple"
    width="80%"
    height="80%"
  />
  <p><em>Web page element capture</em></p>
</div>


범용 UI 캡처 및 분석 도구입니다.

Chrome 개발자 도구의 인스펙터(Inspector)처럼, macOS 전체 시스템의 UI 요소를 검사하고 캡처할 수 있는 데스크톱 애플리케이션입니다.

## 주요 기능

- **글로벌 인스펙터 (Global Inspector):** 화면의 창, 버튼, 또는 모든 UI 요소 위에 마우스를 올리면 해당 영역이 강조 표시됩니다.
- **스마트 캡처 (Smart Capture):** 강조된 요소를 클릭하면 즉시 클립보드로 캡처됩니다.
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
