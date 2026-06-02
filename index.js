import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "world",
  password: process.env.DB_PASSWORD || "",
  port: Number(process.env.DB_PORT || 5432),
});

const port = Number(process.env.PORT || 3000);
const app = express();

db.connect();

let quiz = [];
db.query("SELECT * FROM capitals" ,(err ,res) => {
  if (err) {
    console.error("can't reach the datsbsse" , err.stack)
  } else {
   quiz = res.rows;
  }
  db.end();
});
let totalCorrect =0;
//Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion ={};

app.get("/", (req, res)=>{
  totalCorrect = 0;
   nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion});
});


app.post("/submit" , (req, res) =>{
   let answer = req.body.answer.trim();
   let isCorrect= false;
   if(currentQuestion.capital.toLowerCase() === answer.toLowerCase()){
    totalCorrect++;
    console.log("correct answer");
    isCorrect = true;
   }
   nextQuestion();
   res.render("index.ejs",{
    question : currentQuestion,
    wasCorrect :isCorrect,
    totalScore :totalCorrect,
   });
});



async function nextQuestion(){
  const randomcountry = quiz[Math.floor(Math.random() *quiz.length)];
  currentQuestion = randomcountry; 
};

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});