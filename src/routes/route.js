const express=require('express');
const router = express.Router();


router.get('/MissiNum', function(req,res) {
    const arr = [1,2,3,4,5,7,8,9]
    //var missing = [];

    function findNumber(arr) {
        let n = arr.length;
        let total = ((n + 2) * (n + 1)) / 2;
        for (let i = 0; i < n; i++) {
          total -= arr[i];
        }
        return total;
      }
      
      console.log(findNumber(arr));
      res.send("First problem done")
});



module.exports = router;
