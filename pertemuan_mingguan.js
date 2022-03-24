const express = require("express")

const app = express()

//Pertemuan Mingguan RPS
app.post("/dosen/tambah/pertemuan", function(req,res){
    res.send("Pertemuan Mingguan RPS berhasil ditambahkan");
})
app.put("/dosen/update/pertemuan", function(req,res){
    res.send("Pertemuan Mingguan RPS berhasil di update");
})
app.delete("/dosen/delete/pertemuan", function(req,res){
    res.send("Pertemuan Mingguan RPS berhasil dihapus");
})
