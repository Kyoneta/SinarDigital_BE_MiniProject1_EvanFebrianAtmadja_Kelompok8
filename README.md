# Mini Project Backend - Tabungan

Aplikasi sederhana untuk mencatat pemasukan dan pengeluaran target tabungan, dibuat dengan Express.js dan File System (JSON).

**Nama:** Evan Febrian Atmadja
**Kelas:** Kelompok 8
**Topik:** Finance Tracker

## Fitur
1.  **View:** Melihat daftar transaksi (GET).
2.  **Add:** Menambah transaksi baru (POST).
3.  **Delete:** Menghapus transaksi (DELETE).

## Cara Menjalankan
1.  Clone repository ini.
2.  Buka terminal, ketik `npm install` (untuk install dependencies).
3.  Jalankan server dengan `npm run dev` atau `node server.js`.
4.  Buka browser di `http://localhost:3000`.

## Struktur Folder
Menggunakan pola **MVC (Modular)**:
- `src/controllers`: Logika bisnis.
- `src/routes`: Pengaturan jalur URL.
- `data/`: Penyimpanan JSON.
