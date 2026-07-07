# Growth Asset Trading — Website Project

## Project Overview

Trang giới thiệu bản thân (one-page) cho **Growth Asset Trading** — một trader kỳ cựu kiêm kỹ sư
phần mềm. Mục đích: trưng bày danh mục EA/bot đã tự tay code (cho khách hàng và cho chính mình), bộ
công cụ Telegram automation, các sản phẩm web đã dựng, dịch vụ nhận code theo yêu cầu, quy trình
làm việc, và kêu gọi liên hệ qua Telegram/điện thoại.

**Primary goal:** Chứng minh năng lực kỹ thuật thực tế qua danh mục sản phẩm cụ thể, từ đó chuyển
đổi khách xem trang thành người liên hệ đặt code EA/bot hoặc web riêng.

> Bản thiết kế trước (nền tím/cam, dịch vụ tư vấn bot) đã được thay thế hoàn toàn bởi thiết kế này
> (nền đen/xanh lá, portfolio cá nhân) theo yêu cầu ngày 2026-07-07. Xem lịch sử git nếu cần tham
> chiếu bản cũ.

---

## Tech Stack

- **HTML5** — semantic markup, single `index.html` entry point
- **CSS3** — custom properties (CSS vars), no frameworks; `style.css`
- **Vanilla JavaScript** — `main.js`; smooth scroll, scroll animations, counter, mobile menu
- **No build tools** — works by opening `index.html` directly in a browser
- **Fonts:** `IBM Plex Mono` (headline/số liệu/label) + `IBM Plex Sans` (body) via Google Fonts

---

## File Structure

```
GROWTH-ASSET-TRADING/
├── index.html
├── style.css
├── main.js
├── assets/
│   ├── logo.jpeg              # Logo thật (biểu đồ tăng trưởng) — nav + favicon + footer
│   ├── showcase-aitrading.png # Screenshot RichAITrading (mục Web)
│   └── showcase-thetrader.png # Screenshot Growth Asset Trading landing cũ (mục Web)
├── design-reference/
│   ├── README.md               # Bản handoff thiết kế gốc (nguồn chính — đọc trước khi đổi design)
│   └── source.html             # File thiết kế tham khảo hi-fi gốc (inline style, không phải code prod)
├── Logo.svg                    # Legacy — icon robot của thiết kế cũ, không còn dùng
├── Design.png                   # Legacy — ảnh tham chiếu thiết kế cũ (nền tím/cam), không còn dùng
└── CLAUDE.md
```

---

## Design System

### Color Palette

```css
--bg:            #0a0a0a;              /* nền trang (đen thuần) */
--bg-card:       #121712;              /* nền card */
--bg-chrome:     #0f120f;              /* thanh chrome giả trình duyệt / footer */
--border:        #232823;              /* border chung */
--border-pill:   #1f3324;              /* border tag/pill */
--border-ghost:  #2b4536;              /* border nút ghost */
--text-heading:  #f2f5ee;              /* heading chính */
--text-heading-2:#eef2ee;              /* heading phụ / nút ghost text */
--text-eyebrow:  #7d9186;              /* label "// ..." phía trên heading */
--text-body:     #92a196;              /* mô tả, nav link */
--text-label:    #6b7d70;              /* label số liệu nhỏ */
--accent:        #16a34a;              /* xanh lá đậm — CTA, số liệu, tag */
--accent-hover:  #4ade80;              /* hover link/CTA */
--amber:         #fbbf24;              /* tag "SIGNAL BOT" */
--glow-1:        rgba(21,128,61,.18);  /* glow tròn góc trên phải hero */
--glow-2:        rgba(20,90,50,.10);   /* glow tròn góc dưới trái hero */
```

**Không tự ý đổi bảng màu này** — đen + xanh lá đậm là kết quả sau nhiều vòng chỉnh sửa theo yêu
cầu trực tiếp của tác giả trang (xem `design-reference/README.md`).

### Typography

```
Mono ('IBM Plex Mono', 400/500/600/700): headline, eyebrow, số liệu, label, nút
Sans ('IBM Plex Sans', 400/500/600/700): body, mô tả

H1 (hero headline): clamp(1.75rem, 6vw, 3rem) / 600 / line-height 1.22 / mono
H2 (section title):  clamp(1.375rem, 3.2vw, 1.6875rem) / 600
Eyebrow label:        12px / letter-spacing .14em / mono / "// ..." viết hoa thủ công
Body / mô tả:         13–16.5px / line-height 1.6–1.75
Số liệu lớn:          17–28px / 600 / mono
```

### Spacing / Radius

```
Page max-width: 1280px
Section padding ngang: 20px (mobile) → 40px (≥768px)
Card border-radius: 6px (card thường), 8px (card Web có ảnh), 20px (pill), 4px (button)
Grid gap: 16–20px
```

### Key Design Rules

- **Accent highlights:** `<span class="accent">chữ</span>` → `color: var(--accent)`
- **Cards:** `1px solid var(--border)`, `background: var(--bg-card)`, `border-radius: 6–8px`
- **Buttons:** Primary = nền xanh lá đặc, chữ đen; Ghost = viền, chữ xanh lá hoặc trắng
- **Không dùng ảnh stock** — chỉ screenshot sản phẩm thật (mục Web) hoặc CSS/gradient
- **Không dùng grid/dot pattern nền** — hero chỉ dùng gradient chéo + 2 khối glow tròn mờ
- **Animations:** `fade-up` khi vào viewport qua `IntersectionObserver`, chỉ chạy một lần

---

## Page Sections (in order)

### 1. Nav — Sticky top bar
- `position: sticky; top:0`, nền `rgba(10,14,18,.92)` + `backdrop-filter: blur(8px)`
- Trái: `assets/logo.jpeg` (26×26px, radius 6px) + "Growth Asset Trading" (mono, accent)
- Giữa: 5 link — Sản phẩm(`#portfolio`), Telegram Tools(`#telegram`), Web(`#web`), Dịch vụ(`#services`), Liên hệ(`#contact`)
- Phải: nút viền "Telegram @longhdtrader" → `https://t.me/longhdtrader`
- **Breakpoint hamburger: `<1024px`** (không phải `<768px` như quy ước chung) — 5 link + CTA dài
  ("Telegram @longhdtrader") không vừa ở độ rộng 768px; xem mục Thay Đổi Đáng Chú Ý #1

### 2. Hero
- Eyebrow: `// TRADER & SOFTWARE ENGINEER — 100% TỰ TAY CODE BOT`
- H1: "Tôi biến chiến lược giao dịch / thành **bot chạy 24/7,** không cảm xúc, không sai lệch."
- Sub: giới thiệu trader kiêm kỹ sư phần mềm, tự code EA/bot MT5, Telegram, web sản phẩm
- CTA: "Xem danh mục sản phẩm →" (`#portfolio`, primary) + "Đặt bot riêng" (`#contact`, ghost mono)
- Nền: `linear-gradient(135deg,#0a0a0a,#101c15)` + 2 glow tròn (góc trên-phải, dưới-trái)

### 3. Stats strip
- Grid 2 cột (mobile) → 4 cột (`≥768px`), border giữa các ô
- `11+` EA & bot đã triển khai · `3` Nền tảng: MT5·Telegram·Web · `6+` Sàn/broker · `100%` Code tự viết
- Số liệu có counter animation (`data-count`, `data-suffix`) khi vào viewport

### 4. `#portfolio` — EA & Bot đã xây dựng
- Header: eyebrow + H2 "EA & bot đã xây dựng — cho khách hàng và cho chính mình" + tag cảnh báo
  (số liệu minh hoạ, sẽ cập nhật báo cáo backtest/live thực tế)
- Grid 1 cột (mobile) → 2 cột (`≥640px`), 10 card `.ea-card`
- Mỗi card: tên EA + pill symbol (XAUUSD/ANY) → mô tả → 3 chỉ số (Win rate / Profit factor / Max
  drawdown; card cuối "PropfirmBot & TheCapitalBot" dùng "—/—/15$ Rủi ro/lệnh")
- **10 EA theo thứ tự:** DCA Basket EA, HedgingBot, SMC UTBot EA, UT Bot EA, M5Bot, Bot Duy Dương,
  FiboBot, ComBot, PropfirmBot & TheCapitalBot — nội dung đầy đủ xem `design-reference/source.html`

### 5. `#telegram` — Telegram Tools
- Eyebrow `// TELEGRAM AUTOMATION` + H2 "Bộ công cụ Telegram cho trader"
- Grid 1 → 2 (`≥640px`) → 3 cột (`≥1024px`), 3 card không có hàng số liệu
- Tag trên tên bot: "SIGNAL BOT" (amber `#fbbf24`, 2 bot đầu) / "FORWARD BOT" (accent, bot thứ 3)
- 3 bot: SendSignal Bot, Binance Send Signal Bot, Forward Message Bot

### 6. `#web` — Web & Product Design
- Eyebrow `// WEB & PRODUCT DESIGN` + H2 "Một số web tôi đã tự tay dựng"
- Grid 1 → 2 (`≥640px`) → 3 cột (`≥1024px`), mỗi card có thanh chrome giả trình duyệt (3 chấm tròn)
- 3 sản phẩm: **RichAITrading** (`showcase-aitrading.png`), **Growth Asset Trading**
  (`showcase-thetrader.png`), **BackCom** (không có screenshot — khối gradient trang trí +
  4 pill sàn: Exness/Binance/Bybit/OKX)
- **Link demo tạm là `href="#"`** — chưa có URL thật; thay bằng URL demo thật khi có (xem mục
  Thay Đổi Đáng Chú Ý #2)

### 7. `#services` — Dịch vụ
- Eyebrow `// DỊCH VỤ` + H2 "Nhận code theo yêu cầu"
- Grid 1 → 3 cột (`≥768px`), card giữa "02 — PHỔ BIẾN" nổi bật (viền `--accent`, nền `--bg-card`)
- 3 gói: 01 EA Cơ Bản, 02 EA Nâng Cao (phổ biến), 03 Web & Automation

### 8. Quy trình
- Eyebrow `// QUY TRÌNH` + H2 "Từ ý tưởng đến bot chạy thực tế"
- Grid 1 → 2 (`≥640px`) → 4 cột (`≥1024px`)
- BƯỚC 01 Tư vấn chiến lược · 02 Thiết kế & Backtesting · 03 Triển khai & Kiểm tra · 04 Theo dõi & Tối ưu

### 9. `#contact` — Liên hệ / Footer
- Hàng trên: eyebrow + H2 "Có ý tưởng bot? Bắt đầu bằng một tin nhắn." + 2 nút: "Nhắn Telegram"
  (primary, link `t.me/longhdtrader`) + "0866 797 299" (ghost, không phải link)
- Hàng dưới: logo nhỏ + "© 2026 Growth Asset Trading" | "Telegram: @longhdtrader" · "0866 797 299"

---

## Content Language

- **Primary:** Tiếng Việt — toàn bộ text người dùng thấy
- **Technical terms:** giữ nguyên tiếng Anh (EA, Bot, Backtest, Win rate, Profit factor, Drawdown)
- **Tone:** Trực tiếp, kỹ thuật, số liệu cụ thể — giọng của một kỹ sư/trader, không hype marketing

---

## JavaScript Behaviors (`main.js`)

1. **Scroll animations** — `IntersectionObserver` thêm `.visible` vào `[data-animate]`
2. **Hamburger menu** — toggle `.nav-links.open` dưới `1024px`, đóng khi click link/click ngoài
3. **Smooth scroll** — mọi `a[href^="#"]` dùng `scrollTo({behavior:'smooth'})`, trừ `href="#"` trơ
   (placeholder link Web) được bỏ qua để tránh lỗi `querySelector('#')`
4. **Counter animation** — animate số trong stats strip (`[data-count]`) khi vào viewport

---

## Favicon

```html
<link rel="icon" type="image/jpeg" href="assets/logo.jpeg">
```

`assets/logo.jpeg` là logo thật (biểu đồ cột + mũi tên tăng trưởng) do tác giả cung cấp — dùng cho
favicon, nav (26×26px) và footer (16×16px).

---

## Responsive Breakpoints

```css
/* sm */  @media (min-width: 640px)  { ... }  /* EA/Telegram/Web/Process grids: 1→2 col */
/* md */  @media (min-width: 768px)  { ... }  /* stats 2→4 col, services 1→3 col */
/* lg */  @media (min-width: 1024px) { ... }  /* Telegram/Web grids 2→3 col, nav hamburger→full */
```

- Nav → hamburger dưới `1024px` (không phải `768px`, xem lý do ở mục Thay Đổi Đáng Chú Ý #1)
- Grid 2/3/4 cột collapse dần về 1 cột trên mobile theo bảng trên
- Hero, stats, headings dùng `clamp()` để scale theo viewport

---

## Quy Tắc Bắt Buộc

> Những quy tắc này phải được tuân thủ trong mọi thay đổi, không có ngoại lệ.

### 1. So Sánh Với Design Sau Mỗi Thay Đổi Lớn
- Đọc `design-reference/README.md` và `design-reference/source.html` trước khi đổi bất kỳ giá trị
  màu/spacing/nội dung nào — đây là nguồn tham chiếu chính, độ trung thực cao (hi-fi)
- Không chuyển sang section tiếp theo nếu section hiện tại chưa khớp thiết kế gốc

### 2. Mobile-Friendly Bắt Buộc
- CSS mobile-first: styles mặc định cho `<640px`, `@media (min-width: ...)` mở rộng lên desktop
- Test 3 breakpoint sau mỗi section: `375px`, `768px`, `1280px`
- Không element nào `overflow-x` trên mobile; touch targets tối thiểu `44×44px`
- Nav phải có hamburger hoạt động đầy đủ dưới `1024px`

### 3. Animation Scroll Bắt Buộc
- **Mọi section** có `data-animate` attribute và animation khi vào viewport
- `IntersectionObserver` với `threshold: 0.15`; animation chỉ chạy **một lần** (`observer.unobserve()`)
- Mặc định: `fade-up` (opacity 0→1, translateY 28→0, 0.6s ease-out)
- Element con dùng stagger delay (`transition-delay`) cách nhau ~`0.05s`
- Không dùng thư viện ngoài (AOS, GSAP, ...) — chỉ CSS + vanilla JS
- **Lưu ý khi test bằng screenshot tự động (Playwright fullPage, v.v.):** phải scroll thật qua toàn
  trang trước khi chụp để `IntersectionObserver` kích hoạt — chụp `fullPage` ngay sau `goto()` sẽ
  cho tất cả section dưới `data-animate` còn `opacity:0` (trông như trống), đây không phải bug.

```css
[data-animate] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-animate].visible { opacity: 1; transform: translateY(0); }
```

---

## Development Checklist

- [x] `index.html` với đủ 9 khu vực nội dung theo `design-reference/`
- [x] `style.css` mobile-first với CSS variables theo bảng màu xanh lá/đen mới
- [x] `main.js`: scroll animation, hamburger, smooth scroll (bỏ qua `href="#"`), counter
- [x] Assets thật (`logo.jpeg`, `showcase-aitrading.png`, `showcase-thetrader.png`) đã copy vào `assets/`
- [x] Mobile responsive test qua Playwright ở 375px/768px/1280px — không overflow-x
- [x] Favicon set tới `assets/logo.jpeg`
- [x] Toàn bộ text tiếng Việt theo đúng nội dung gốc trong `design-reference/source.html`
- [ ] Thay `href="#"` ở 3 card mục Web bằng URL demo thật khi có
- [ ] Cập nhật số liệu hiệu suất EA (win rate, profit factor, drawdown) bằng dữ liệu backtest/live thật

---

## Thay Đổi Đáng Chú Ý (So Với `design-reference/source.html`)

| # | Phần | Thay đổi | Lý do |
|---|------|----------|-------|
| 1 | Nav | Hamburger dưới `1024px` thay vì thiết kế gốc chỉ làm cho desktop | 5 link + CTA "Telegram @longhdtrader" không vừa ở độ rộng tablet 768px |
| 2 | Web | 3 card demo dùng `href="#"` thay vì `aitrading/landing.html`, `thetrader/index.html`, `backcom/index.html` | Các file demo thật không nằm trong repo này; chờ URL thật từ tác giả |
| 3 | Toàn trang | Bổ sung toàn bộ breakpoint mobile/tablet (thiết kế gốc chỉ có bản desktop ~1280px) | README gốc yêu cầu tự bổ sung responsive khi implement |
| 4 | Toàn trang | Bổ sung `data-animate` + `IntersectionObserver` fade-up cho mọi section | Thiết kế gốc là trang tĩnh không animation; quy tắc bắt buộc của dự án yêu cầu animation scroll |
