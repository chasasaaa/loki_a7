import user from '../models/users.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await user.create({
            name: nama,
            type : 'D',
            email: email,
            password: hashPassword,
        });
        res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const User = await user.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, User[0].password);
        if(!match) return res.status(400).json({msg:"Password Salah!"});
        const userId = User[0].id;
        const name = User[0].name;
        const email = User[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiredIn: '30s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiredIn: '1d'
        });
        await user.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('resfreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.json({ accessToken});
    } catch (error) {
        res.status(404).json({msg:'Email tidak dapat ditemukan'});
    }
}