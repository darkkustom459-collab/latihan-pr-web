# 🔀 Latihan Pull Request — Web Showcase

Selamat datang di repository latihan Pull Request (PR)! Repository ini dibuat khusus untuk teman-teman yang ingin belajar flow kerja Git & GitHub secara langsung melalui studi kasus web sederhana.

---

## 🎯 Tujuan Repository Ini
1. Memahami alur kerja **Fork & Pull Request (PR)** di GitHub.
2. Belajar melakukan clone, membuat branch baru, commit, dan push.
3. Belajar menyelesaikan conflict jika ada perubahan bersamaan.
4. Menambahkan profil / kartu nama kamu ke halaman web kontributor.

---

## 🚀 Cara Menjalankan Web di Komputer Kamu

Project ini murni menggunakan **HTML, CSS, dan Vanilla JavaScript**, sehingga **tidak memerlukan install NodeJS, build tool, atau dependency apapun!**

Cukup buka file `index.html` langsung di browser, atau gunakan extension seperti [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) di VS Code.

Atau via terminal:
```bash
# Python
python3 -m http.server 8000

# Atau npx serve
npx serve .
```

---

## 📝 Panduan Langkah-demi-Langkah Membuat Pull Request (PR)

### 1. Fork Repository
Klik tombol **Fork** di pojok kanan atas halaman repository ini untuk membuat salinan repo di akun GitHub kamu sendiri.

### 2. Clone Repository Milikmu
Clone repo hasil fork tersebut ke laptop/komputer kamu:
```bash
git clone https://github.com/<USERNAME-KAMU>/latihan-pr-web.git
cd latihan-pr-web
```

### 3. Buat Branch Baru
Selalu biasakan membuat branch baru sebelum mengedit kode:
```bash
git checkout -b tambah-profil-<namamu>
```
*Contoh:* `git checkout -b tambah-profil-budi`

### 4. Tambahkan Profil Kamu
Buka file [`data/contributors.json`](data/contributors.json), lalu tambahkan data kamu di bagian paling bawah array:

```json
  {
    "username": "username-github-kamu",
    "name": "Nama Lengkap atau Panggilan",
    "role": "Mahasiswa / Frontend Learner",
    "avatar": "https://avatars.githubusercontent.com/u/ID_KAMU?v=4",
    "bio": "Sepatah dua patah kata pesan motivasi atau perkenalan diri.",
    "skills": ["HTML", "CSS", "Python"],
    "links": {
      "github": "https://github.com/username-github-kamu"
    }
  }
```

> **Tips Avatar:** Kamu bisa gunakan avatar GitHub kamu: `https://avatars.githubusercontent.com/<username-github>` atau avatar Dicebear gratis: `https://api.dicebear.com/7.x/bottts/svg?seed=<namamu>`.

### 5. Simpan dan Commit Perubahan
Periksa perubahan dan buat commit yang rapi:
```bash
git status
git add data/contributors.json
git commit -m "feat: tambah profil <namamu>"
```

### 6. Push ke Repository Kamu
```bash
git push origin tambah-profil-<namamu>
```

### 7. Buat Pull Request (PR) di GitHub
1. Buka repository kamu di browser.
2. Kamu akan melihat tombol kuning bertuliskan **"Compare & pull request"**. Klik tombol tersebut.
3. Beri judul PR, misalnya: `feat: Menambahkan profil Budi ke daftar kontributor`.
4. Isi checklist pada template PR yang tersedia.
5. Klik **"Create pull request"**! 🎉

---

## 💡 Ide Latihan PR Lainnya
Selain menambahkan profil, kamu juga bisa latihan PR dengan:
- [ ] Memperbaiki typo atau memperjelas dokumentasi di README.
- [ ] Menambahkan fitur dark/light mode toggle.
- [ ] Menambahkan animasi CSS baru pada kartu kontributor.
- [ ] Menambahkan tombol filter kategori baru.

---

## 🤝 Etika Berkolaborasi
- Gunakan bahasa yang sopan dan ramah di issue serta pull request.
- Jangan menghapus data kontributor lain yang sudah terdaftar.
- Selamat belajar dan berkolaborasi! ✨
