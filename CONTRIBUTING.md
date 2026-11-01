# Panduan Berkontribusi (Contributing Guide)

Terima kasih sudah tertarik untuk berpartisipasi dan latihan membuat Pull Request!

## Aturan Format `data/contributors.json`
Pastikan data JSON kamu valid sebelum melakukan commit:
- Menggunakan tanda koma `,` yang benar antar objek.
- Properti wajib: `username`, `name`, `role`, `bio`, `skills`.
- Properti `skills` berupa array string, contoh: `["HTML", "CSS", "JavaScript"]`.

Contoh format:
```json
{
  "username": "johndoe",
  "name": "John Doe",
  "role": "Frontend Learner",
  "avatar": "https://avatars.githubusercontent.com/johndoe",
  "bio": "Halo semua!",
  "skills": ["HTML", "CSS"],
  "links": {
    "github": "https://github.com/johndoe"
  }
}
```

## Konvensi Pesan Commit
Disarankan menggunakan format commit sederhana:
- `feat: tambah profil <nama>` &mdash; ketika menambah profil baru
- `fix: perbaiki typo di readme` &mdash; jika memperbaiki kesalahan teks
- `style: perbaiki tampilan kartu profil` &mdash; jika merapikan CSS
