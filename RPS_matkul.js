const express = require("express")

const app = express()

app.get("/carimatkul", function(req, res){
    res.send("Cari mata kuliah / kode mata kuliah")
})
app.get("/detailRPS", function(req, res){
    res.send("Detail RPS")
})
app.get("eksportPDF", function(req, res){
    res.send("Berhasil Mengeksport RPS mata kuliah menjadi PDF");
})

app.listen(3000,function(){
    console.log("server aktif pada port 3000")
})
