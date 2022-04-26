let axios = require("axios")
let getcities = async function(req,res) {
    try {
        let cities = [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let cityObjectArray = [ ]
        for(let i=0;i<cities.length;i++) {
            let object ={city:cities[i]}
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=331d608710288bcfb9f634b7168aacce`
            }
            let rep = await axios(options);
            console.log(rep.data.main.temp)
            object.temp = rep.data.main.temp
            cityObjectArray.push(object)
         }
        let sorted = cityObjectArray.sort(function(a,b){
            return a.temp-b.temp
        })
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})
    }
        catch(error) {
            console.log(error)
            res.status(500).send({status:false, msg:"Server error"})
        }
        
    }
module.exports.getcities=getcities