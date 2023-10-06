const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 5001;

const app = express();
//middilware 
app.use(express.json());
app.use(cors());

// database connection

app.get("/",(req,res) => {
    res.send("Server is Ready");
})

app.listen(port,()=> {
    console.log(`Server running in ${port}`);
})