# Permata Roti 🍞

**Roti Pilihan Keluarga** — Aplikasi katalog roti online yang memungkinkan pengguna untuk menjelajah berbagai pilihan roti, menyimpan item pilihan mereka, dan melihat total harga.

---

## 🌐 Live Website

- **Frontend (User)**:  
  Website katalog roti untuk pengguna umum.  
  👉 https://permata-roti.vercel.app/

- **CMS (Admin Dashboard)**:  
  Dashboard admin untuk login, menambah, mengedit, dan menghapus katalog roti.  
  👉 https://permata-roti-cms.vercel.app/

- **Backend (API Server)**:  
  Server backend yang menyediakan API untuk produk dan autentikasi admin.  
  👉 https://permata-roti-backend.vercel.app/

---

## 🏗️ Struktur Proyek

Proyek ini terdiri dari tiga folder utama, seluruhnya dibangun menggunakan **Next.js** dengan **TypeScript**:

```
permata-roti/
├── backend/
├── cms/
└── frontend/
```

---

## 📦 Fitur Utama

### 👨‍🍳 Admin (CMS)

- Login & Register admin
- Tambah, ubah, dan hapus produk roti
- Manajemen katalog produk
- Visualisasi statistik produk dengan Chart.js

### 🧑‍🦱 Pengguna (Frontend)

- Menampilkan katalog roti per kategori
- Menyimpan roti ke dalam menu pilihan
- Menghitung total harga belanja roti
- Filter roti berdasarkan kategori

### 🔌 API (Backend)

- REST API untuk produk dan autentikasi admin
- Autentikasi berbasis token
- CRUD produk roti
- Data produk terhubung dengan Supabase Storage

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
# Frontend
cd frontend
npm install

# CMS
cd ../cms
npm install

# Backend
cd ../backend
npm install

```

### 3. Jalankan Semua Server per role

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - CMS
cd ../cms
npm run dev

# Terminal 3 - Frontend User
cd ../frontend
npm run dev

# Note: khusus role backend harus menambahkan .env lalu
npx prisma generate
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
MIT LISENSE - PROKUL TEAM

Proyek ini bersifat privat / edukatif. Kontak pengembang untuk lisensi penggunaan lebih lanjut.

