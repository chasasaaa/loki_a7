import express from "express";
import dotenv from "dotenv";
import db from "./config/koneksi.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(router);

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