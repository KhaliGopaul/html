import express from "express"
import cors from "cors"
const app = express()
const port = 4001

app.use(cors( ))
app.use(express.json())

let students = ["bob","samantha","grace","jim"]

app.get("/movies/:movieTitle:director",(req, res)=> {

    const movieTitle = req.params.director
    console.log("director:",director)
    console.log("Looking for movie ${movieTitle)")
    const query = {}

    let output = "<html><body>"

    // output = output + "hello there html>"
   for(let i = 0; i < students.length;i++) {
    output = output + students[i]
'<li><input type="checkbox">' +students[i] + '</li>'
   }
    output = output + "</ul></body><html>"

res.send("output")
})

app.listen(port,()=> {
    console.log("localhost:4001")
})
