const express= require("express");
const app=express();
const port=process.env.PORT||5000;

require("dotenv").config();
// Make sure to include these imports

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const from=`
<form method="POST" action="/prompt">
<textarea name="prompt" id="prompt"></textarea>
<button type="submit">Generate</button>
</form>
`
app.use(express.urlencoded({extended:true}))
app.get("/prompt",(req,res)=>{
    get.send(form);
})
app.post("/prompt",async(req,res)=>{
    const {prompt}=req.body;
    const result = await model.generateContent(prompt);
    const text=result.response.text();
    res.send({data:text,status:200 });

})

app.get("/",(req,res)=>{
    res.send({data:"server running",status:200})
})

app.listen(port,()=>{
    console.log('start the process',+port);
}
)