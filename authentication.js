const express = require("express")
const res = require("express/lib/response")

const app = express()

app.post("/beranda/login", function(req, resp){
    let ref = {
        "id": "12345",
        "password": "qwert",
        "code_error": 0
    }   
    res.send(ref) 
    resp.send("Halaman Login, Masukkan Username dan Password");
})
app.post("/beranda/logout", function(req, resp){
    let ref = {
        "message": "berhasil logout",
        "code_error": 0
    }
    res.send(ref)
    resp.send("Anda telah Logout");
})
app.put("/admin/pilih dosen/daftar dosen", function (req, res) {
    let ref = {
        "message": "dosen berhasil dipilih",
        "code_error": 0,
        "dosen 1": {
            "NIDN": "0018018202",
            "nama": "husnil kamil, MT",
            "Fakultas": "Teknologi Informasi",
            "Unit": "Sistem Informasi"
        },
        "dosen 2": {
            "NIDN": "0015048907",
            "nama": "Jefril Rahmadoni, S.Kom, M.Kom",
            "Fakultas": "Teknologi Informasi",
            "Unit": "Sistem Informasi"
        },
    }
    res.send(ref)
    res.send("Dosen telah dipilih")
})
app.listen(3000, function(){
    console.log("Masuk ke halaman login")
})