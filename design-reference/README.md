# Handoff: Trang giới thiệu bản thân — Trader &amp; Coder (Growth Asset Trading)

## Overview
Trang giới thiệu cá nhân một trang (one-page) cho một trader kỳ cựu kiêm kỹ sư phần mềm. Mục tiêu: giới thiệu bản thân, trưng bày danh mục EA/bot đã xây dựng (cho khách hàng và tự phát triển), bộ công cụ Telegram automation, các sản phẩm web đã làm, dịch vụ nhận code theo yêu cầu, quy trình làm việc, và kêu gọi liên hệ (Telegram/điện thoại).

## About the Design Files
Các file trong gói này là **thiết kế tham khảo viết bằng HTML** (dùng inline style, không có framework/build step) — đây là bản mô phỏng độ trung thực cao (giao diện, màu sắc, chữ, khoảng cách đã là bản final), **không phải code để copy thẳng vào production**. Nhiệm vụ của dev: dựng lại giao diện này trong môi trường/công nghệ hiện có của dự án đích (React, Vue, Next.js, hoặc plain HTML/CSS nếu chưa có codebase) theo đúng pixel, màu sắc, typography và nội dung mô tả bên dưới. Nếu dự án chưa tồn tại, khuyến nghị dùng plain HTML/CSS/JS hoặc Next.js tĩnh vì đây là landing page tĩnh, không có state phức tạp.

## Fidelity
**High-fidelity (hifi)** — màu sắc, font, spacing, nội dung đã là bản final do khách hàng (chủ trang) duyệt qua nhiều vòng chỉnh sửa màu sắc. Dev nên recreate pixel-perfect.

## Screens / Views
Đây là **một trang duy nhất (single page, scroll dọc)**, không có routing. Cấu trúc từ trên xuống dưới:

### 1. Top bar (sticky nav)
- **Purpose**: điều hướng nhanh tới các section + CTA liên hệ Telegram.
- **Layout**: flex row, `justify-content: space-between`, padding `20px 40px`, sticky `top:0`, `z-index:10`.
- **Nền**: `rgba(10,14,18,.92)` + `backdrop-filter: blur(8px)` (hiệu ứng kính mờ khi cuộn).
- **Border dưới**: `1px solid #232823`.
- **Trái**: logo ảnh 26×26px bo góc 6px (`logo.jpeg` — logo biểu tượng biểu đồ tăng trưởng màu xanh) + text "Growth Asset Trading", font `IBM Plex Mono` 600 16px, màu accent `#16a34a`.
- **Giữa**: 5 link text (`Sản phẩm`, `Telegram Tools`, `Web`, `Dịch vụ`, `Liên hệ`) — anchor tới id tương ứng, màu `#92a196`, font size 13.5px, gap 30px.
- **Phải**: nút viền "Telegram @longhdtrader" — border 1px `#16a34a`, chữ `#16a34a`, padding `9px 18px`, radius 4px, font mono 12.5px. Link tới `https://t.me/longhdtrader`.

### 2. Hero
- **Purpose**: tuyên ngôn giá trị chính — trader kiêm coder tự xây bot.
- **Layout**: padding `88px 40px 68px`, nền gradient chéo `linear-gradient(135deg,#0a0a0a 0%,#101c15 100%)`, `overflow:hidden`, `position:relative`.
- **Hiệu ứng nền**: 2 khối glow tròn blur (không dùng grid/dot pattern):
  - Góc trên phải: 460×460px, `radial-gradient(circle, rgba(21,128,61,.18), transparent 70%)`, dịch ra ngoài khung (`top:-120px;right:-100px`), `filter: blur(10px)`.
  - Góc dưới trái: 380×380px, `radial-gradient(circle, rgba(20,90,50,.10), transparent 70%)`, (`bottom:-160px;left:-80px`), cùng blur.
- **Eyebrow**: `// TRADER & SOFTWARE ENGINEER — 100% TỰ TAY CODE BOT` — font mono 12.5px, letter-spacing .14em, màu `#7d9186`.
- **Headline** (H1): font mono 600, 48px, line-height 1.18, max-width 800px, màu `#f2f5ee`. Nội dung: "Tôi biến chiến lược giao dịch\<br\>thành **bot chạy 24/7,** không cảm xúc, không sai lệch." — cụm "bot chạy 24/7," tô màu accent `#16a34a`.
- **Sub-headline**: font sans 16.5px, line-height 1.75, màu `#9db0a2`, max-width 620px. Nội dung: "Trader kỳ cựu, đồng thời là kỹ sư phần mềm — tôi tự thiết kế chiến lược, tự viết toàn bộ code EA/bot của mình trên MetaTrader 5, Telegram, và tự tay dựng cả những trang web sản phẩm đi kèm."
- **CTA row** (flex, gap 14px, margin-top 34px):
  - Primary: nền `#16a34a`, chữ đen `#0a0a0a`, weight 600, radius 4px, padding `14px 26px`, text "Xem danh mục sản phẩm →", anchor `#portfolio`.
  - Secondary (ghost): border 1px `#2b4536`, chữ `#eef2ee`, font mono, cùng padding/radius, text "Đặt bot riêng", anchor `#contact`.

### 3. Stats strip
- **Layout**: CSS grid 4 cột đều nhau, border-top/bottom `1px solid #232823`, mỗi cột border-right `1px solid #232823` (trừ cột cuối), padding `26px 40px`.
- 4 item (số lớn font mono 600 28px màu `#16a34a` + label 12.5px màu `#92a196`, margin-top 6px):
  1. `11+` — "EA & bot đã triển khai"
  2. `3` — "Nền tảng: MT5 · Telegram · Web"
  3. `6+` — "Sàn/broker tích hợp"
  4. `100%` — "Code tự viết, không thuê ngoài"

### 4. Portfolio — EA & bot đã xây dựng (`id="portfolio"`)
- **Eyebrow**: `// PORTFOLIO — EA & BOT ĐÃ XÂY DỰNG` (style eyebrow dùng chung toàn trang).
- **Header row**: tiêu đề H2 27px/600 "EA & bot đã xây dựng — cho khách hàng và cho chính mình" (trái) + cảnh báo nhỏ (phải, wrap khi hẹp): border 1px `#1f3324`, radius 4px, padding `5px 10px`, font mono 12px màu `#6b7d70`, text "⚠ số liệu hiệu suất bên dưới là dữ liệu minh hoạ, sẽ cập nhật báo cáo backtest/live thực tế".
- **Grid**: 2 cột đều nhau, gap 16px, margin-top 28px. 10 card, mỗi card:
  - Border 1px `#232823`, nền `#121712`, radius 6px, padding 22px.
  - Header: tên EA (weight 600, 16px) trái + tag tròn phải (border 1px `#1f3324`, radius 20px, padding `2px 8px`, font mono 10.5px, màu `#16a34a` — chứa symbol: `XAUUSD` hoặc `ANY`).
  - Mô tả: 13px, màu `#92a196`, line-height 1.6, margin-top 8px.
  - Hàng số liệu hiệu suất: grid 3 cột, gap 10px, margin-top 16px, padding-top 14px, border-top `1px solid #232823`. Mỗi ô: số lớn (font mono 17px, `#16a34a`) + label nhỏ (11px, `#6b7d70`) — 3 chỉ số: Win rate / Profit factor / Max drawdown (card cuối "PropfirmBot & TheCapitalBot" dùng "—" cho 2 cột đầu và "15$ / Rủi ro/lệnh" cho cột 3 vì đây là công cụ hỗ trợ thủ công, không có tín hiệu tự động).
  - **10 card theo thứ tự**: DCA Basket EA (XAUUSD, 68%/1.8/11%), HedgingBot (XAUUSD, 61%/1.6/14%), SMC UTBot EA (ANY, 64%/1.7/13%), UT Bot EA (ANY, 59%/1.5/15%), M5Bot (ANY, 57%/1.4/17%), Bot Duy Dương (ANY, 60%/1.5/14%), FiboBot (ANY, 62%/1.6/15%), ComBot (ANY, 58%/1.5/16%), PropfirmBot & TheCapitalBot (ANY, —/—/15$). Nội dung mô tả từng EA — xem trực tiếp trong file HTML đính kèm (đã viết đầy đủ tiếng Việt).

### 5. Telegram Tools (`id="telegram"`)
- Header: eyebrow `// TELEGRAM AUTOMATION`, H2 "Bộ công cụ Telegram cho trader", đoạn mô tả 14.5px màu `#92a196` max-width 680px.
- **Grid 3 cột**, gap 16px. Mỗi card giống style card portfolio (border/bg/radius/padding) nhưng không có hàng số liệu:
  - Tag nhỏ phía trên tên (font mono 11px, không viền, không nền — chỉ đổi màu chữ): "SIGNAL BOT" màu `#fbbf24` (amber, dùng cho 2 bot đầu) hoặc "FORWARD BOT" màu `#16a34a` (dùng cho bot thứ 3 — có màu khác để phân biệt loại).
  - 3 bot: **SendSignal Bot** (gửi tín hiệu tự động vào group/kênh), **Binance Send Signal Bot** (tự động quét & phát tín hiệu Long/Short Binance Futures khung H4), **Forward Message Bot** (tự động chuyển tiếp tin nhắn/tín hiệu từ 1 group nguồn sang nhiều group/kênh đích, giữ nguyên định dạng).

### 6. Web & Product Design (`id="web"`)
- Eyebrow `// WEB & PRODUCT DESIGN`, H2 "Một số web tôi đã tự tay dựng".
- **Grid 3 cột**, gap 20px. Mỗi item là card link (toàn card clickable, `<a>`), border 1px `#232823`, nền `#121712`, radius 8px, `overflow:hidden`:
  - **Thanh chrome giả trình duyệt** trên cùng: cao 34px, nền `#0f120f`, border-bottom, 3 chấm tròn 9px màu `#2a3742` (mô phỏng nút đóng/thu nhỏ/phóng to của cửa sổ trình duyệt).
  - **Ảnh preview** (screenshot thật của sản phẩm) full-width, border-bottom.
  - **Nội dung dưới**: tên sản phẩm (16px/600) trái + "Xem demo →" phải (font mono 11px, màu accent) trên cùng hàng; mô tả bên dưới (13px, `#92a196`).
  - **3 sản phẩm**:
    1. **RichAITrading** — ảnh `showcase-aitrading.png`. Mô tả: "Nền tảng AI Trading full-stack: phân tích biểu đồ bằng Gemini Vision, nạp USDT qua MetaMask, gói TradingView premium, hệ thống giới thiệu & hoa hồng."
    2. **Growth Asset Trading** — ảnh `showcase-thetrader.png`. Mô tả: "Landing page dịch vụ code bot theo yêu cầu — kể câu chuyện qua pain point, quy trình 4 bước, case study và form liên hệ."
    3. **BackCom** — KHÔNG dùng ảnh chụp, thay bằng khối nền gradient trang trí (`linear-gradient(160deg,#121712,#191d13)`, cao 225px) chứa tiêu đề "Hoàn phí Exness · Binance · Bybit · OKX" (font mono 17px) + hàng 4 pill nhỏ tên sàn (Exness/Binance/Bybit/OKX — border 1px `#1f3324`, radius 20px, chữ `#16a34a`). Mô tả: "Trang hoàn phí giao dịch đa sàn — trang so sánh riêng cho từng broker, FAQ song ngữ, chuyển đổi Việt/Anh."

### 7. Dịch vụ (`id="services"`)
- Eyebrow `// DỊCH VỤ`, H2 "Nhận code theo yêu cầu".
- **Grid 3 cột**, gap 16px, 3 card border/radius giống trên (card giữa có border màu accent `#16a34a` thay vì `#232823` để làm nổi bật gói phổ biến, cùng nền `#121712` trong khi 2 card kia không set nền — dùng nền trong suốt của trang):
  1. "01" / EA Cơ Bản — "1 chiến lược, 1 symbol, backtest report đầy đủ."
  2. "02 — PHỔ BIẾN" / EA Nâng Cao — "Multi-strategy, panel GUI, Telegram alert, license key." (card nổi bật)
  3. "03" / Web & Automation — "Landing page, signal bot, forward bot, tool nội bộ theo yêu cầu."
  - Số thứ tự font mono 12px màu accent, margin-bottom 10px; tên gói 16px/600; mô tả 13px `#92a196`.

### 8. Quy trình
- Eyebrow `// QUY TRÌNH`, H2 "Từ ý tưởng đến bot chạy thực tế".
- **Grid 4 cột**, gap 16px, mỗi card border `#232823` radius 6px padding 22px:
  1. BƯỚC 01 — Tư vấn chiến lược — "Trao đổi mục tiêu, symbol, khẩu vị rủi ro."
  2. BƯỚC 02 — Thiết kế & Backtesting — "Code EA/bot, kiểm tra trên dữ liệu lịch sử."
  3. BƯỚC 03 — Triển khai & Kiểm tra — "Chạy demo, tinh chỉnh tham số thực tế."
  4. BƯỚC 04 — Theo dõi & Tối ưu — "Hỗ trợ, tối ưu tham số lâu dài."
  - Label bước: font mono 12px màu accent; tên bước 15px/600; mô tả 12.5px `#92a196`.

### 9. Liên hệ / Footer (`id="contact"`)
- Nền `#0a0a0a`, border-top `1px solid #232823`, padding `56px 40px`.
- **Hàng trên**: trái — eyebrow `// LIÊN HỆ` + H2 "Có ý tưởng bot? Bắt đầu bằng một tin nhắn."; phải — 2 nút: "Nhắn Telegram" (nền accent, chữ đen, link `https://t.me/longhdtrader`) + ô hiển thị "0866 797 299" (border ghost, không phải link).
- **Hàng dưới** (border-top `1px solid #232823`, margin-top 40px, padding-top 24px): trái — logo nhỏ 16px + "© 2026 Growth Asset Trading"; phải — "Telegram: @longhdtrader" và "0866 797 299", màu `#92a196`, font 13px.

## Interactions &amp; Behavior
- Toàn bộ nav link và CTA "Xem danh mục sản phẩm" / "Đặt bot riêng" là anchor scroll nội trang (`#portfolio`, `#contact`, v.v.) — dùng smooth scroll (`scroll-behavior:smooth` hoặc JS) khi implement thật; các section đích có `scroll-margin-top:70px` để không bị top bar sticky che mất tiêu đề khi nhảy tới.
- Top bar là **sticky** (`position: sticky; top:0`) với hiệu ứng kính mờ (`backdrop-filter: blur(8px)`) — không có hiệu ứng "co lại khi cuộn" nào khác được thiết kế thêm.
- Link `a` mặc định màu `#16a34a`, hover `#4ade80`.
- 3 card trong mục "Web" là link mở trực tiếp tới file demo tương ứng (trong bản gốc: `aitrading/landing.html`, `thetrader/index.html`, `backcom/index.html` — đây là các sản phẩm thật khác của tác giả, không thuộc phạm vi trang này, chỉ cần trỏ tới URL demo thật khi lên production).
- Không có animation on-scroll, không có state client-side, không có form — đây là trang tĩnh thuần tuý.
- Responsive: **thiết kế gốc chỉ làm ở độ rộng desktop** (~1280px, `max-width:1280px;margin:0 auto` cho toàn trang). Cần tự bổ sung breakpoint mobile khi implement (gợi ý: các grid 2/3/4 cột nên collapse về 1 cột dưới ~768px, stats strip 4 cột về 2 cột, font hero giảm dùng `clamp()`).

## State Management
Không có state — trang tĩnh, không có form, không có fetch dữ liệu.

## Design Tokens

### Màu sắc
```
Nền trang (đen thuần):        #0a0a0a
Nền card:                      #121712
Nền thanh chrome demo/footer:  #0f120f
Border chung:                  #232823
Border tag/pill:               #1f3324
Border nút ghost:               #2b4536
Accent chính (xanh lá đậm):     #16a34a
Accent hover (link):            #4ade80
Accent phụ — tag "SIGNAL BOT":  #fbbf24 (amber)
Text heading:                   #f2f5ee / #eef2ee
Text phụ/eyebrow:               #7d9186
Text mô tả:                     #92a196
Text label nhỏ (số liệu):       #6b7d70
Glow nền hero 1:                rgba(21,128,61,.18)
Glow nền hero 2:                rgba(20,90,50,.10)
```

### Typography
```
Font chính (mono, headline/số liệu/label): 'IBM Plex Mono', 400/500/600/700
Font phụ (body, mô tả):                    'IBM Plex Sans', 400/500/600/700
Google Fonts import: family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700

H1 (hero headline): 48px / 600 / line-height 1.18 / font mono
H2 (section title):  27px / 600
Eyebrow label:        12.5px / letter-spacing .14em / font mono / uppercase (viết hoa thủ công trong content)
Body / mô tả:         13–16.5px / line-height 1.6–1.75
Số liệu lớn (stat/portfolio): 17–28px / 600 / font mono
```

### Spacing / Radius
```
Page max-width: 1280px, margin:0 auto
Section padding ngang: 40px (đồng nhất toàn trang)
Section padding dọc: 56–88px tuỳ section
Card padding: 20–24px
Card border-radius: 6px (card thường), 8px (card web/demo có ảnh), 20px (pill/tag tròn), 4px (button)
Grid gap: 14–20px tuỳ khu vực
```

## Assets
- `logo.jpeg` — logo biểu tượng biểu đồ cột + mũi tên tăng trưởng, nền gradient xanh dương nhạt (do người dùng cung cấp). Dùng ở nav (26×26px, radius 6px) và footer (16×16px, radius 4px).
- `showcase-aitrading.png` — screenshot thật trang landing "RichAITrading" (nền tảng AI Trading của tác giả).
- `showcase-thetrader.png` — screenshot thật trang landing "Growth Asset Trading".
- Card "BackCom" không dùng ảnh chụp (gặp lỗi kỹ thuật khi chụp trang gốc) — thay bằng khối trang trí CSS như mô tả ở mục 6.

## Files
- `Trang gioi thieu - Final.dc.html` — file thiết kế đầy đủ (nguồn chính, có toàn bộ nội dung tiếng Việt và inline style chính xác). **Đây là file tham chiếu quan trọng nhất — đọc trực tiếp file này để lấy chính xác từng đoạn text, giá trị màu, và cấu trúc HTML.**
- `assets/logo.jpeg`, `assets/showcase-aitrading.png`, `assets/showcase-thetrader.png` — ảnh đính kèm.

## Lưu ý quan trọng
- Toàn bộ số liệu hiệu suất EA (win rate, profit factor, max drawdown) là **dữ liệu minh hoạ**, cần thay bằng số liệu backtest/live thật trước khi lên production — đã có cảnh báo hiển thị ngay trên trang.
- Không dùng bất kỳ pattern grid/dot kẻ ô nào ở nền hero — chủ đích tránh vì trùng với thiết kế web khác của tác giả. Chỉ dùng gradient + glow tròn mờ.
- Không tự ý đổi lại bảng màu — bảng màu đen + xanh lá đậm hiện tại là kết quả sau nhiều vòng chỉnh sửa theo yêu cầu trực tiếp của tác giả.
