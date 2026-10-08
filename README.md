# Kéo - Búa - Bao

Trò chơi kéo búa bao đơn giản, phản hồi nhanh và tương tác trực tiếp trên trình duyệt.

## Chạy trực tiếp

Mở trình duyệt tại:

```text
http://localhost:4173
```

Hoặc chạy bằng PowerShell:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\serve.ps1
```

## Trên GitHub Pages

Dự án này gồm một ứng dụng web tĩnh. Khi được đẩy lên repository, GitHub Actions sẽ tạo trang web tự động từ thư mục `.`.

## Cấu trúc

- `index.html`: giao diện trang web
- `styles.css`: kiểu dáng và responsive design
- `app.js`: tương tác với người chơi và máy
- `game.js`: logic kéo búa bao
- `game.test.js`: các test logic
