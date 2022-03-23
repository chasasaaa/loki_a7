// CPMK 
const express = require("express");
const res = require("express/lib/response");

const app = express()

// TAMBAH CPMK
app.post("/dosen/tambah/CPMK", function (req, res) {
    console.log("Dosen tambah CPMK")
    
    let obj = {
        "message": "CPMK berhasil ditambah",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62128",
            "nama": "Sistem  Penunjang Keputusan",
            "sks": 3,
            "semester": 4
        },
        "capaian": {
            "M-1": "Mampu memahami konsep, teknologi dan model bisnis e-Commerce. (S8, P2, KU2, KU10, KK3)",
            "M-2": "Mampu memahami system keamanan /enkripsi dalam penerapan e-Commerce. (S8, P2, KU10, KK3)",
            "M-3": "Mampu memahami berbagai model system pembayaran e-Commerce. (S8, P2, KK3)"
        }
    }
    res.json(obj);
    res.send(" CPMK mata kuliah berhasil ditambahkan")
})

// UPDATE CPMK
app.put("/dosen/update/CPMK", function (req, res) {
    let obj = {
        "message": "CPMK berhasil di update",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62112",
            "nama": "Probabilitas dan Statistika",
            "sks": 3,
            "semester": 2
        },
        "capaian": {
            "M-1": "Mahasiswa mampu menjelaskan konsep statistik dalam analisis data serta implementasinya dalam dunia bisnis (CP-3, CP-5, CP-7)",
            "M-2": "Mahasiswa mampu menggunakan metode grafik dan metode numerik dalam meringkaskan serta menggambarkan data (CP-1, CP-3, CP-5, CP-7)",
            "M-3": "Mahasiswa mampu menggunakan metode analisis regresi dan korelasi linier sederhana (CP-1, CP-3, CP-5, CP-7)"
        }
    }
    res.json(obj);
    res.send("CPMK mata kuliah berhasil di update")
})

// DELETE CPMK
app.delete("/dosen/hapus/CPMK", function (req, res) {
    let obj = {
        "message":"CPMK berhasil dihapus",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62123",
            "nama": "Perancangan Basis Data",
            "sks": 4,
            "semester": 4
        },
        "capaian": {
            "M-1": "Mahasiswa memahami konsep dasar basis data. (S9, P2)",
            "M-2": "Mahasiswa mampu melakukan analisis keperluan untuk menyusun deskripsi basis data. (S9, P2, KU2, KU10, KU11, KK2)",
            "M-3": "Mahasiswa mampu menerangkan konsep perancangan basis data. (S9, P2, KU2, KU10, KU11, KK2)"
        }
    }
    res.json(obj);
    res.send(" CPMK mata kuliah berhasil dihapus")
})

app.listen(3000, function () {
    console.log("Server jalan di port 3000")
})
