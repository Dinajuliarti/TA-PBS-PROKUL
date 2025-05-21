# Permata Roti 🍞
**Roti Pilihan Keluarga** — Aplikasi katalog roti online yang memungkinkan pengguna untuk menjelajah berbagai pilihan roti, menyimpan menu pilihan mereka, dan melihat total harga.

## 🏗️ Struktur Proyek

Proyek ini terdiri dari tiga folder utama, seluruhnya dibangun menggunakan **Next.js** dengan **TypeScript**:
```
permata-roti/
├── backend/ # API server untuk menangani permintaan data
├── cms/ # Admin dashboard untuk login, register, dan CRUD katalog roti
└── frontend/ # Tampilan utama pengguna (user-facing UI)
```


---

## 📦 Fitur Utama

### 👨‍🍳 Admin (CMS)
- Login & Register
- Tambah / Ubah / Hapus produk roti
- Manajemen katalog produk

### 🧑‍🦱 Pengguna (Frontend)
- Lihat katalog roti
- Tambahkan roti ke menu pilihan
- Lihat total harga belanja

### 🔌 API (Backend)
- REST API untuk semua fitur roti dan autentikasi
- Data dikonsumsi oleh `cms` dan `frontend`

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/username/permata-roti.git
cd permata-roti
```

### **2. Install Dependencies**
```bash
# Masuk ke masing-masing folder per role dan install dependensi
cd backend && npm install
cd cms && npm install
cd frontend && npm install
```

### 3. Jalankan Semua Server per role
```bash
# Terminal 1 - API Server
cd backend
npm run dev

# Terminal 2 - CMS Admin
cd cms
npm run dev

# Terminal 3 - Frontend User
cd frontend
npm run dev
```

## 🗃️ Teknologi yang Digunakan
- Next.js dengan TypeScript
- Tailwind CSS 
- RESTful API
- Supabase (Postgre)

## 📁 Folder Khusus
 - backend/: API Next.js (app/api) yang melayani permintaan data roti & autentikasi.
 - cms/: Admin UI yang memungkinkan login/register dan mengelola produk.
 - frontend/: Tampilan utama pengguna dengan fitur tambah ke menu dan hitung total harga.

## ✨ Credits
Dibuat dengan ❤️ oleh Tim Permata Roti — untuk keluarga Indonesia yang cinta roti.

## 📜 License
Proyek ini bersifat privat / edukatif. Kontak pengembang untuk lisensi penggunaan lebih lanjut.
```bash
Jika kamu ingin aku menyesuaikan bagian setup Supabase, autentikasi, atau contoh struktur katalog JSON di dalam API, beri tahu saja. Aku juga bisa bantu buat diagram arsitektur kalau dibutuhkan.
```
