const express = require("express")

const app = express()

//Pertemuan Mingguan RPS
app.post("/dosen/tambah/pertemuan", function(req,res){
    let pert = {
        "message": "Pertemuan Mingguan RPS berhasil ditambahkan",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62125",
            "nama mata kuliah": "Pemograman Web",
            "jumlah pertemuan": "1 pertemuan"
        }
    }
    res.send(pert)
    res.send("Pertemuan Mingguan RPS berhasil ditambahkan");
})
app.put("/dosen/update/pertemuan", function(req,res){
    let pert = {
        "message": "Pertemuan Mingguan RPS berhasil di update",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62125",
            "nama mata kuliah": "Pemograman Web",
            "jumlah pertemuan": "2 pertemuan"
        }
    }
    res.send(pert)
    res.send("Pertemuan Mingguan RPS berhasil di update");
})
app.delete("/dosen/delete/pertemuan", function(req,res){
    let pert = {
        "message": "Pertemuan Mingguan RPS berhasil dihapus",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62125",
            "nama mata kuliah": "Pemograman Web",
            "jumlah pertemuan": "2 pertemuan"
        }
    }
    res.send(pert)
    res.send("Pertemuan Mingguan RPS berhasil dihapus");
})

app.listen(3000, function () {
    console.log("Server jalan di port 3000")
})
