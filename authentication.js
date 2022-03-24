const express = require("express")

const app = express()

app.post("/login", function(req, resp){
    resp.send("Halaman Login, Masukkan Username dan Password");
})
app.post("/logout", function(req, resp){
    resp.send("Anda telah Logout");
})
