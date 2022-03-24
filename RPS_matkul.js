const express = require("express")

const app = express()

app.get("/carimatkul", function(req, res){
    let cari = {
        "message": "Mata Kuliah yang dicari",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62125",
            "nama mata kuliah": "Pemograman Web",
        }
    }
    res.send(cari)
    res.send("Mata Kuliah yang dicari berhasil ditemukan")
})

app.get("/detailRPS", function(req, res){
    let detail = {
        "message": "Detail RPS",
        "code_error": 0,
        "mata kuliah": {
            "kelas": "A",
            "kode": "JSI62125",
            "nama mata kuliah": "Pemograman Web",
            "sks": 3,
            "jadwal": "13.30-16.00",
            "dosen": "Husnil Kamil, MT",
            "ruangan": "E.1.6",
            "semester": 4
        }
    }
    res.send(detail)
    res.send("Detail RPS berhasil ditampilkan")
})
app.get("eksportPDF", function(req, res){
    let eksport = {
        "message": "Export RPS to PDF",
        "code_error": 0,
        "File": {
            "nama file": "RPS Mata kuliah semester 4",
        }
    }
    res.send(eksport)
    res.send("Berhasil Mengeksport RPS mata kuliah menjadi PDF");
})
