import express from "express"
import cors from "cors"
const app = express()
const port = 4001

app.use(cors( ))
app.use(express.json())

let students = ["bob","samantha","grace","jim"]

app.get("/",(req, res)=> {

    let output = "<html><body><ul>"

    // output = output + "hello there html>"
   for(let i = 0; i < students.length;i++) {
    output = output +
'<li><input type="checkbox">' +s
tudents[i] + '</li>'
   }
    output = output + "</ul></body><html>"

res.send("output")
})

app.listen(port,()=> {
    console.log("localhost:4001")
})
