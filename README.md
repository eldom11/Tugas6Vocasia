
# Tugas Minggu 6

## 1. Database Seeder

### Deskripsi:

Pada tugas ini, Anda diminta untuk membuat sebuah seeder yang terkadang diperlukan pada tahap awal dari proses development backend ataupun ketika kita memerlukan data dummy di database. Seeder ini ditulis menggunakan Mongoose, sebuah library ODM (Object Data Modeling) yang populer untuk MongoDB dan Node.js.Di dalam seeder akan terdapat beberapa command untuk menjalankan perintah yang berkaitan dengan pengisian data dsj pada database.

### Requirement

Terdapat 4 fungsionalitas yang harus dimiliki pada implementasi seeder ini:

•	**check-db-connection:** Memeriksa koneksi ke MongoDB.

•	**reset-db: Digunakan** untuk mereset database (saat ini belum diimplementasikan).

•	**bulk-insert:** Digunakan untuk memasukkan banyak data yg berasal dari seed.json yg telah disediakan. (saat ini belum diimplementasikan).

•	**get-all**: Digunakan untuk mendapatkan seluruh data yang terdapat pada collection (saat ini belum diimplementasikan).
Untuk tiap penamaan argument/command diwajibkan sesuai dengan penamaan di atas (reset-db, bulk-insert, get-all).

•	Di tiap fungsional diatas diwajibkan untuk menuliskan script kedalam package.json bagian script yg telah disediakan pada kode.
 
•	Buatlah file .env dan isi 2 data environment sebagai berikut:

•	MONGODB_URI: merupakan uri yg digunakan untuuk terhubung database mongodb kalian. Direkomendasikan menggunakan  Mongodb Atlas untuk mempermudah proses pengerjaan (link: https://www.mongodb.com/cloud/atlas/register) atau kalian bisa setup sendiri database mongodb dilokal device.

•	MONGODB_COLLECTION: Merupakan nama collection untuk menyimpan data seed. 

Sebagai contoh kami telah memberikan file .env.example untuk environtment yg diperlukan dalam seeder ini.
 

### Poin Penilaian				
1)	Semua requirement terpenuhi.
2)	Menerapkan git commit yang deskriptif untuk tiap proses yg sedang dikerjakan.
3)	Kerapian dan keseragaman dalam menulis kode.
 

2.	Pokedex Web	
•	Deskripsi:
Pada tugas ini, Anda diminta untuk mendevelop Pokedex Web yg terdiri dari Mock server (backend) dan Vanilla React (frontend). Mock server merupakan server sementara yang biasa digunakan sebagai acuan untuk frontend ketika API yang dibuat oleh backend belum selesai.

Di dalam repository terdiri atas 2 folder yaitu:
1)	backend
2)	frontend

### Requirement Backend:

a)	Kalian diminta untuk mendevelop fungsi di dalam file generateJsonDB.js. Seperti namanya anda harus mengenerate data list pokemon yang berasal dari Public API https://pokeapi.co/api/v2/pokemon/  dengan struktur sebagai berikut:

 

b)	Tiap data hasil parsing merupakan data yg berasal dari Public API dan tidak diperbolehkan untuk hardcode!
c)	Hasil dari parsing dari Public API harus disimpan dengan nama “db.json”, agar nantinya bisa dijalankan dengan script “npm run start” untuk menjalankan mock server dengan library json-server.

d)	Jumlah data yg diparsing minimal 100 data.


### Requirement Frontend:

Di dalam folder frontend telah disediakan implementasi dasar serta pembuatan komponen html mengguankan react, selanjutnya kalian akan diminta untuk.

a)	Menambahkan styling ke tiap komponen menggunakan css framework yaitu Tailwind (https://tailwindcss.com/).

b)	Kalian diperbolehkan untuk merombak react element yang tersedia untuk disesuaikan dengan desain masing-masing.

c)	Web harus menerapkan responsive web design.

d)	Styling yang kalian terapkan akan menjadi bahan penilaian.

•	Poin penilaian:

a.	Menerapkan git commit yang deskriptif untuk tiap proses yg sedang dikerjakan.

b.	Poin2 requirement untuk backend dan frontend terpenuhi.

c.	Kerapian dan keseragaman dalam menulis kode.

