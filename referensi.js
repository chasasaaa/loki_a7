// REFERENSI
const express = require("express")

const app = express()

//TAMBAH REFERENSI
app.post("/dosen/tambah/referensi", function (req, res) {

    let ref = {
        "message": "Referensi berhasil ditambah",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62123",
            "nama": "Perancangan Basis Data",
            "sks": 4,
            "semester": 4
        },
        "referensi": {
            "utama": "Thomas Connolly and Carolyn Begg, Database Systems: A Practical Approach to Design, Implementation, and Management 6th Ed, Pearson Inc., 2014. ",
            "pendukung": "Silberschartz, Korth and Sudarshan, Database System Concepts 6th Ed, Mc Graw Hill, 2011. " 
        }
    }
    res.send(ref)
    res.send("Referensi berhasil di tambah")
})

//UPDATE REFERENSI
app.put("/dosen/update/referensi", function (req, res) {
    let ref = {
        "message": "Referensi berhasil di update",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62112",
            "nama": "Probabilitas dan Statistika",
            "sks": 3,
            "semester": 2
        },
        "referensi": {
            "utama": "Applied Statistics and Probability for Engineers, Douglas C. Montgomery, George C. Runger, 6th edition, 2018.",
            "pendukung": "Statistics for Engineering and The Sciences, Mendenhall, W., Sincich, T., Prentice Hall, New Jersey, 2015. ",  
        }
    }
    res.send(ref)
    res.send("Referensi berhasil di update")
})

//DELETE REFERENSI
app.delete("/dosen/hapus/referensi", function (req, res) {
    let ref = {
        "message": "Referensi berhasil di update",
        "code_error": 0,
        "mata kuliah": {
            "kode": "JSI62128",
            "nama": "Sistem  Penunjang Keputusan",
            "sks": 3,
            "semester": 4
        },
        "referensi": {
            "utama": "Applied Statistics and Probability for Engineers, Douglas C. Montgomery, George C. Runger, 6th edition, 2018.",
            "pendukung": "1.	Turban, Efraim, David King, Jae Lee and Dennis Viehland. 2004. Electronic Commerce. A Managerial Perspective (Chapter 2). Prentice Hall ",
        }
    }
    res.send(ref)
    res.send("Referensi berhasil di hapus")
})

app.listen(3000, function () {
    console.log("Server jalan di port 3000")
})