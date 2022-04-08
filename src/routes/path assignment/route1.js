const express=require('express');
const router = express.Router();

router.get('/movies' , function(req,res) {
    const arr =["Dabang","Spiderman","Tadap","deadpool","Batman"]
    res.send(arr)
})

router.get('/movies/:indexNumber', function(req,res) {
    const arr = ["Dabang","Spiderman","Tadap","deadpool","Batman"]
    const id = req.params.indexNumber
    if(id<arr.length){
        res.send(arr[id])
    } else {
        res.send('use valid index')
    }
});
     router.get('/films' , function(req,res) {
         const arr1 = [{“id”: 1,“name1”: “The Shining }, 
            {“id”: 2,“name1”: “Incendies”},
             {“id”: 3,“name1”: “Rang de Basanti”},
              {“id”: 4,“name1”: “Finding Nemo”}]
           const ms = JSON.stringify(arr1)
           console.log(ms)
           res.send(arr1[0])
     )


module.exports = router;