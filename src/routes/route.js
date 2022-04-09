const express = require('express');

const router = express.Router()

// Problem Statement 1 :

       let players =[{
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"]
       },
   ];
   router.post("/players", function (req, res) {
         let data =req.body;
         players.filter((item) => {
             if(item.name ===data.name) {
             return res.send({msg: "player already exists"})
         }});
         players.push(data);
         return res.send(players);
         console.log(players);
         });

module.exports = router;