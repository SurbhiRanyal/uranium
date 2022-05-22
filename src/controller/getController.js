const urlModel = require("../models/urlModel")
const redis = require("redis");
const { promisify } = require("util");
const shortid = require("shortid");

//Connect to redis
const redisClient = redis.createClient(
    17658,
    "redis-17658.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    { no_ready_check: true }
  );
  redisClient.auth("lE0EZUgxZIjUeJgvDZqZw6sZsttoq3IQ", function (err) {
    if (err) throw err;
  });
  
  redisClient.on("connect", async function () {
    console.log("Connected to Redis..");
  });

  //Connection setup for redis

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);
  


const urlCode = async (req, res) => { 
    try {
        // find a document match to the code in req.params.code
        Code = req.params.urlCode
        // urlCode is valid or not
        if(!shortid.isValid(Code)){
            return res.status(400).send({status:false, msg:'invalid urlCode'})
        }
        let cahcedata = await GET_ASYNC(`${Code}`)
        let parseData = JSON.parse(cahcedata)
        // if url code is present redirect to the longurl
        if(parseData) {
            return res.status(302).redirect(parseData.longUrl)
        } else {
         let url = await urlModel.findOne({ urlCode: Code })
            if (!url) {
               // if url code is not exist
              return res.status(404).send({status:false,msg:'urlCode is not exist'})
        }
        await SET_ASYNC(`${Code}`, JSON.stringify(url))
           return res.status(302).redirect(url.longUrl)
         }
    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
}


module.exports.urlCode = urlCode