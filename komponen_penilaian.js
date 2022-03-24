const express = require("express")

const app = express()

// TAMBAH KOMPONEN PENILAIAN
app.post("/dosen/tambah/penilaian", function (req, res) {
    let obj = {
        "message": "Komponen berhasil ditambahkan",
        "code_eror": 0,
        "komponen": {
            "persentase kuis": "15%",
            "persentase uts": "30%",
            "persentase uas": "35%",
            "persentase tugas": "15%",
            "persentase kehadiran": "5%",
        }
    }
    res.send(obj)
    res.send("Komponen Penilaian berhasil ditambahkan")
})

// UPDATE KOMPONEN PENILAIAN
app.put("/dosen/update/penilaian", function (req, res) {
    let obj = {
        "message": "Komponen berhasil diupdate",
        "code_eror": 0,
        "komponen": {
            "persentase kuis": "10%%",
            "persentase uts": "25%",
            "persentase uas": "35%",
            "persentase tugas": "20%",
            "persentase kehadiran": "10%",
        }
    }
    res.send(obj)
    res.send("Komponen Penilaian berhasil di update")
})

// DELETE KOMPONEN PENILAIAN
app.delete("/dosen/hapus/penilaian", function (req, res) {
    let obj = {
        "message": "Komponen berhasil didelete",
        "code_eror": 0,
        "komponen": {
            "persentase kuis": "10%%",
            "persentase uts": "25%",
            "persentase uas": "35%",
        }
    }
    res.send(obj)
    res.send("Komponen Penilaian berhasil dihapus")
})
app.listen(3000, function () {
    console.log("Server jalan di port 3000")
})
