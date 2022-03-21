const express = require("express")

const app = express()

app.get("/", function(request, response){
    response.send("Selamat Datang")
})
app.get("/home", function(request, response){
    response.send("Halaman Beranda")
})
app.get("/login", function(request, response){
    response.send("Halaman Login Pengguna")
})
app.listen(3000, function(){
    console.log("Server Run")
})