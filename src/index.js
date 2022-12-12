const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello World!");
})
function errCheck(i1, i2,res,opr) {
    if (isNaN(i1) || isNaN(i2)) return "inputError"
    if (opr=="div" && Number(i2) == 0) return "cannotDivide"
    if (parseFloat(i1) < -1000000 || parseFloat(i2) < -1000000 || res<-1000000) return "underFlow"
    if (parseFloat(i1) > 1000000 || parseFloat(i2) > 1000000 || res>1000000) return "overFlow"
    return true 
}

app.post("/add", (req, res)=> {
    let sum = Number(req.body.num1) + Number(req.body.num2);
    let flag=errCheck(req.body.num1, req.body.num2,sum);
    switch (flag) {
        case "inputError":
            res.json({
                "status": "error",
                "message": "Invalid data types"
            })
            break;
        case "underFlow":
            res.json({
                "status": "error",
                "message": "Underflow"
            })
            break;
        case "overFlow":  
            res.json({
                "status": "error",
                "message": "Overflow"
            })
            break
        default:
           flag=true 
           break;
    } 
    if(flag==true) res.json({
        "status": "success",
        "message": "The sum of given two numbers",
        "sum": sum
    })
});
app.post("/sub", (req, res)=> {
    let flag=errCheck(req.body.num1, req.body.num2,sub);
    let sub = Number(req.body.num1) - Number(req.body.num2);
    switch (flag) {
        case "inputError":
            res.json({
                "status": "error",
                "message": "Invalid data types"
            })
            break;
        case "underFlow":
            res.json({
                "status": "error",
                "message": "Underflow"
            })
            break;
        case "overFlow":  
            res.json({
                "status": "error",
                "message": "Overflow"
            })
            break
        default:
           flag=true 
           break;
    }
    if(flag==true) res.json({
        "status": "success",
        "message": "The difference of given two numbers",
        "difference": sub
    })
});
app.post("/mul", (req, res)=> {
    let mul = Number(req.body.num1) * Number(req.body.num2);
    let flag=errCheck(req.body.num1, req.body.num2,mul);
    switch (flag) {
        case "inputError":
            res.json({
                "status": "error",
                "message": "Invalid data types"
            })
            break;
        case "underFlow":
            res.json({
                "status": "error",
                "message": "Underflow"
            })
            break;
        case "overFlow":  
            res.json({
                "status": "error",
                "message": "Overflow"
            })
            break
        default:
           flag=true 
           break;
    }
    if(flag==true) res.json({
        "status": "success",
        "message": "The product of given numbers",
        "result": mul
    })
});
app.post("/div", (req, res)=> {
    let div = Number(req.body.num1) / Number(req.body.num2);
    let flag=errCheck(req.body.num1, req.body.num2,div,"div");
    switch (flag) {
        case "inputError":
            res.json({
                "status": "error",
                "message": "Invalid data types"
            })
            break;
        case "cannotDivide":
            res.json({
                "status": "error",
                "message": "Cannot divide by zero"
            })
            break;
        case "underFlow":
            res.json({
                "status": "error",
                "message": "Underflow"
            })
            break;
        case "overFlow":  
            res.json({
                "status": "error",
                "message": "Overflow"
            })
            break
        default:
           flag=true 
           break;
    }
    if(flag==true) res.json({
        "status": "success",
        "message": "The division of given numbers",
        "result": div
    })
});
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;