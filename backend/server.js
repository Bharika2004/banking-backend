const express = require("express");
const app     = express();
const PORT    = 3000;
app.use(express.json());
app.use((req, res, next) =>{
    res.header("Access-control-allow-origin","*");
    res.header
        ("Access-control-allow-methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header
        ("Access-Control-Allow-Headers", "Content-type");
    if(req.method === "option"){
        return res.sendStatus(200);
    }
    next();
});
app.get("/", (req,res)=>{
    res.send("Banking Backend Server is running");
});
app.get("/api/test", (req,res)=>{
    res.json({
        message: "Banking API is Working"
    });
});
app.post("/api/login", (req, res) => {
    const {username, password} = req.body;
    if(username === "admin" && password === "1234"){
        return res.json({
            success: true,
            message: "Login successful"
        });
    }
    res.json({
        success: false,
        message: "invalid username or password"
    });
});
app.get("/api/account", (req, res) =>{
    res.json({
        accountNumber: "1234567890",
        accountHolder: "Harika",
        accountType  : "Savings",
        balance      :  25000
    });
});
app.post("/api/transfer", (req, res) => {
    const {fromAccount,toAccount,amount} = req.body;
    if (!fromAccount || !toAccount || !amount){
        return res.json({
            success: false,
            message:"please enter all details"
    });
}
    res.json({
        success: true,
        message: "money transfer successful" 
    });
});
app.get("/api/transactions", (req, res) =>{
    res.json([
        {
            date: "15 sep 2026",
            description: "Grocery Store",
            amount     : -1200
        },  
         {
            date: "14 sep 2026",
            description: "Salary credit",
            amount     : 25000
         },
         {
            date: "12 sep 2026",
            description: "Electricity Bill",
            amount     : -1500
         },
         {
            date: "10 sep 2026",
            description: "online shopping",
            amount     : -2500
         },
         {
            date: "08 sep 2026",
            description: "ATM withdrawal",
            amount     : -3000
         },
        ]);
    });             
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});