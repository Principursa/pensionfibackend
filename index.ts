import * as express from "express"



const app = express();
const port = 3000;

app.get('/',  (req, res) => {
    res.send("hello world")
});
app.get("/quote/:age",  (req,res) => { //anadir mas parametros aqui 
    const age = req.params.age //un ejemplo para mostrar como se puede acceder los parametros
    //calcula aqui 

}) 

app.listen(port, () => {
    console.log(`pensionfi app listening on port ${port}`);
});
