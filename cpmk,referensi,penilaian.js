const express = require("express")


const app = express()

//CPMK
app.post("/dosen/tambah/cpmk", function(req,res){
    res.send("Capaian Pembelajaran Mata Kuliah berhasil ditambahkan");
})
app.put("/dosen/update/cpmk", function(req,res){
    res.send("Capaian Pembelajaran Mata Kuliah berhasil di update");
})
app.delete("/dosen/delete/cpmk", function(req,res){
    res.send("Capaian Pembelajaran Mata Kuliah berhasil dihapus");
})

//referensi
app.post("/dosen/tambah/referensi", function(req,res){
    res.send("Referensi berhasil ditambahkan");
})
app.put("/dosen/update/referensi", function(req,res){
    res.send("Referensi berhasil di update");
})
app.delete("/dosen/delete/referensi", function(req,res){
    res.send("Referensi berhasil dihapus");
})


app.post("/dosen/tambah/penilaian", function(req,res){
    res.send("Komponen penilaian berhasil ditambahkan");
})
app.put("/dosen/update/penilaian", function(req,res){
    res.send("Komponen penilaian di update");
})
app.delete("/dosen/delete/penilaian", function(req,res){
    res.send("Komponen penilaian dihapus");
})

app.listen(3000,function(){
    console.log("server aktif pada port 3000")
})
