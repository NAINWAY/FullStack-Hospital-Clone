const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');//1 phala require


main()// 3 then or catch method
    .then(() => {
        console.log("connection seccessful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/data');//2 copy url
}

const userSchema = new mongoose.Schema({//4
    username: String,
    email: String,
    password: Number,
});

const User = mongoose.model("User", userSchema);//5

app.use(express.urlencoded({ extended: true }));//jissa frontend sa data ayage
app.use(express.json());//

app.set("view engine", "ejs");


app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        // res.send(`standerd post response.welcome ${user}!`);
        // res.send("hi i am root");
        res.render("index.ejs");
        console.log(req.body);

    } catch {
        console.log("Sorry Error 404 Not found");
    }

});

app.get("/login", (req, res) => {
    res.send("hello log in ");
})

app.get("*", (req, res) => {//ya error valal h all ka lya
    res.send("sorry Error this page not");
});


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});


// app.get("/register", async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.send(`standerd GET response.welcome ${user}!`);
//         console.log(req.body);
//     } catch {
//         console.log("error soory faild");
//     }

// });