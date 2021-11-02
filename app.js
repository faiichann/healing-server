const express = require("express");

const PORT = process.env.PORT|| 5000;
const app = express();
const tests =[
    {id: 1,name: "faii"},
    {id: 2,name:"iiaf"}
];
app.get('/api/tests/:id', function(req,res){
    const id = req.params.id;
    if(id==1){
        res.send(tests[0]);
    }else if(id==2){
        res.send(tests[1]);
    }else{
        res.send('error 404');
    }
})
app.get('/api/tests', function(req,res){
    res.send(tests);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});