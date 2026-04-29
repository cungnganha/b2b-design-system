# 🚀 Hướng dẫn đẩy Design System lên GitHub & Storybook

## Kết quả cuối: `https://TÊN-BẠN.github.io/b2b-design-system/`

---

## BƯỚC 1 — Cài đặt công cụ (chỉ làm 1 lần)

### 1a. Cài Node.js
→ Tải tại: **https://nodejs.org** → chọn "LTS" → cài đặt bình thường

Kiểm tra:
```bash
node --version   # phải ra v18+ hoặc v20+
npm --version    # phải ra 9+
```

### 1b. Cài Git
→ Tải tại: **https://git-scm.com/downloads**

Kiểm tra:
```bash
git --version
```

### 1c. Tạo tài khoản GitHub (nếu chưa có)
→ **https://github.com/signup**

---

## BƯỚC 2 — Tạo repository trên GitHub

1. Vào **https://github.com/new**
2. Điền:
   - **Repository name**: `b2b-design-system`
   - **Visibility**: Public ✅ (bắt buộc để dùng GitHub Pages miễn phí)
   - **Không** tick "Add README"
3. Click **"Create repository"**
4. Copy URL repo (dạng `https://github.com/TÊN-BẠN/b2b-design-system.git`)

---

## BƯỚC 3 — Giải nén project và cài packages

```bash
# Mở Terminal / Command Prompt
# Di chuyển vào thư mục project đã tải về
cd /đường/dẫn/đến/b2b-design-system

# Cài dependencies
npm install

# Test chạy local
npm run storybook
```

→ Trình duyệt tự mở **http://localhost:6006** → bạn thấy Storybook ✅

Nhấn `Ctrl+C` để tắt server.

---

## BƯỚC 4 — Kết nối với GitHub và đẩy code lên

```bash
# Trong thư mục b2b-design-system:

# Khởi tạo git
git init

# Thêm tất cả file
git add .

# Commit đầu tiên
git commit -m "feat: initial design system setup"

# Đổi tên nhánh chính thành main
git branch -M main

# Kết nối với repo GitHub (thay TÊN-BẠN bằng username của bạn)
git remote add origin https://github.com/TÊN-BẠN/b2b-design-system.git

# Đẩy code lên
git push -u origin main
```

---

## BƯỚC 5 — Bật GitHub Pages

1. Vào repo GitHub của bạn → tab **Settings**
2. Sidebar trái → **Pages**
3. Mục **"Source"** → chọn **"GitHub Actions"**
4. Click **Save**

---

## BƯỚC 6 — Kích hoạt workflow tự động deploy

GitHub Actions sẽ tự chạy khi bạn push code. Để xem:

1. Tab **Actions** trong repo
2. Bạn thấy workflow **"Deploy Storybook to GitHub Pages"** đang chạy
3. Chờ ~3-5 phút → status chuyển sang ✅ xanh
4. Vào **Settings → Pages** → bạn thấy link: `https://TÊN-BẠN.github.io/b2b-design-system/`

---

## BƯỚC 7 — Mở Storybook online 🎉

```
https://TÊN-BẠN.github.io/b2b-design-system/
```

---

## CẬP NHẬT SAU NÀY (thêm/sửa component)

Mỗi lần muốn cập nhật, chỉ cần:

```bash
# Chỉnh sửa file trong src/components/ hoặc stories/

# Kiểm tra local trước
npm run storybook

# Khi ổn → đẩy lên
git add .
git commit -m "feat: add Input component"
git push

# GitHub Actions tự build và deploy (~3 phút)
```

→ Storybook online tự cập nhật. Không cần làm gì thêm.

---

## CẤU TRÚC PROJECT

```
b2b-design-system/
├── src/
│   ├── tokens/
│   │   └── tokens.css          ← 120 design tokens từ Figma
│   └── components/
│       ├── Button/
│       │   ├── Button.jsx       ← React component
│       │   ├── Button.css       ← Styles dùng tokens
│       │   └── Button.stories.jsx  ← Storybook stories
│       ├── Alert/
│       ├── Badge/
│       └── Tooltip/
├── stories/
│   └── foundations/
│       ├── Colors.stories.jsx   ← Trang hiển thị color tokens
│       └── Typography.stories.jsx
├── .storybook/
│   ├── main.js                 ← Storybook config
│   └── preview.js              ← Global styles, theme
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Tự động deploy khi push
└── package.json
```

---

## THÊM COMPONENT MỚI — Ví dụ: Input

### 1. Tạo file component
```jsx
// src/components/Input/Input.jsx
import React from 'react';
import './Input.css';

export const Input = ({ placeholder = 'Placeholder', size = 'md', state = 'default', ...props }) => (
  <input
    className={`ds-input ds-input--${size} ds-input--${state}`}
    placeholder={placeholder}
    disabled={state === 'disabled'}
    {...props}
  />
);
```

### 2. Tạo CSS dùng tokens
```css
/* src/components/Input/Input.css */
@import '../../tokens/tokens.css';

.ds-input {
  width: 100%;
  font-family: var(--font-family-base);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
}
.ds-input--sm  { height: 32px; padding: 0 var(--spacing-3); font-size: 13px; }
.ds-input--md  { height: 40px; padding: 0 var(--spacing-4); font-size: 14px; }
.ds-input--lg  { height: 48px; padding: 0 var(--spacing-5); font-size: 16px; }
.ds-input:focus { outline: none; border-color: var(--color-border-focus); box-shadow: var(--shadow-focus-ring); }
```

### 3. Tạo Story
```jsx
// src/components/Input/Input.stories.jsx
import { Input } from './Input';
export default { title: 'Components/Input', component: Input, tags: ['autodocs'] };
export const Default = { args: { placeholder: 'Enter text...', size: 'md' } };
```

### 4. Push
```bash
git add .
git commit -m "feat: add Input component"
git push
```

---

## CẬP NHẬT TOKENS TỪ FIGMA

Khi bạn thay đổi variables trong Figma:

1. Mở `src/tokens/tokens.css`
2. Cập nhật giá trị thủ công, hoặc dùng plugin **"Variables to CSS"** trong Figma để export
3. Push lên GitHub → tất cả components tự cập nhật màu sắc

### Hoặc tự động hóa với Tokens Studio:
- Cài plugin **Tokens Studio** trong Figma
- Kết nối với GitHub repo của bạn
- Mỗi lần save token trong Figma → tự push vào `src/tokens/tokens.json`
- GitHub Actions tự build lại

---

## SO SÁNH VỚI EXAMPLE

| Feature | Example link | Project của bạn |
|---------|-------------|-----------------|
| Storybook | ✅ | ✅ |
| Token docs | ✅ | ✅ Foundations/Colors |
| Components | ✅ | ✅ Button, Alert, Badge, Tooltip |
| Auto-deploy | ✅ | ✅ GitHub Actions |
| Lexend font | ✅ | ✅ |

---

## CÂU HỎI THƯỜNG GẶP

**Q: Storybook không mở được?**
A: Chạy `npm install` trước, sau đó `npm run storybook`

**Q: GitHub Actions bị lỗi đỏ?**
A: Vào tab Actions → click vào workflow đỏ → đọc log → thường là do `npm install` fail

**Q: Muốn đổi tên domain?**
A: Không dùng Custom Domain thì URL mặc định là `username.github.io/repo-name`

**Q: Có thể thêm dark mode không?**
A: Được — thêm `.dark` class vào `:root` với `@media (prefers-color-scheme: dark)` trong `tokens.css`

**Q: Cần upgrade thêm gì không?**
A: Không — stack này (React + Vite + Storybook 8 + GitHub Pages) đủ production-ready
