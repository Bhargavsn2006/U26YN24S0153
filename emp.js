/* Lab7 Develop ExpressJS app to RESTful API on employees records */
const express = require("express")
const app = express()

app.use(express.json())

let employees = [
    { id: 101, name: "Anand", dept: "IT" },
    { id: 102, name: "Kiran", dept: "Sales"}
]
app.get("/employees", (req, resp) => {
    resp.json(employees)
})

app.get("/employees/:id", (req, resp) => {
    let eid = req.params.id

    const s = employees.find((s) => {return s.id == eid})
    if (s) {
        resp.json(s)
    } else {
        resp.status(404).json({"message": "employee record not found"})
    }
})

app.post("/employees", (req, resp) => {
    let id = req.body.id
    let name = req.body.name
    let dept = req.body.dept

    let s = {
        id: id,
        name: name,
        dept: dept
    };

    employees.push(s)

    resp.status(201).json({
        "message": "new employee created",
        "employee": s
    });
})

app.put("/employees/:id", (req, resp) => {
    let eid = req.params.id

    let index = employees.findIndex((s) => s.id == eid)

    if (index != -1) {
        let name = req.body.name
        let dept = req.body.dept
        let s = { id: eid,name: name,dept: dept };
        employees[index] = s
        resp.json({"message": "employee record updated","employee": s });
    } else {
        resp.status(404).json({"message": "employee record not found"});
    }
})
app.delete("/employees/:id", (req, resp) => {
    let eid = req.params.id

    let s = employees.find((s) => {
        return s.id == eid
    })

    if (s) {
        employees = employees.filter((s) => {return s.id != eid})

        resp.status(200).json({"message": "employee record deleted"})
    } else {
        resp.status(404).json({"message": "employee Record Not Found"})
    }
})


app.listen(3000, () => {console.log("server running on port 3000")})