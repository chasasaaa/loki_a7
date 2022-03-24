const express = require("express")
const app = express()

//Tambah RPS

app.post("/dosen/tambah/RPS", function (req, res) {

    let ref = {
        "message": "RPS berhasil ditambah",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62125",
            "nama": "Pemrogaman Web",
            "sks": 3,
            "semester": 4
        },
        "tahun ajaran": {
            "genap" : "2020/2021"
        }
    }
    res.send(ref)
    res.send("RPS berhasil di tambah")
})

//Update RPS

app.put("/dosen/update/RPS", function (req, res) {

    let ref = {
        "message": "RPS berhasil ditambah",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62110",
            "nama": "Probabilitas dan Statistik",
            "sks": 3,
            "semester": 4
        },
        "tahun ajaran": {
            "ganjil" : "2020/2021"
        }
    }
    res.send(ref)
    res.send("RPS berhasil di update")
})

//Delete RPS

app.delete("/dosen/hapus/RPS", function (req, res) {
    let ref = {
        "message": "RPS berhasil di delete",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62122",
            "nama": "Data Mining",
            "sks": 3,
            "semester": 4
        },
        "tahun ajaran":{
            "ganjil": "2021/2022"
        }
            
    }
    res.send(ref)
    res.send("RPS berhasil di delete")
})

app.listen(3000, function () {
    console.log("Server jalan di port 3000")
})
