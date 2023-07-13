const jwt = require('jsonwebtoken')

/////// this is for that taki hm sare routes ko protect kar skae taki sab ke aupper authencticaton laga sak e

module.exports = async(req,res,next)=>{

    try {
        const token = req.headers['authorization'].split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(err, decode)=> {
             if(err) {
                 return res.status(401).send({
                    success : false,
                    message: "MIddleware auth failed ",
                    error
                  }) 
             }else{
                req.body.userId = decode.userId;
                next();
             }
             
        })
        
    } catch (error) {
        console.log(error);
        res.status(401).send({
          success : false,
          message: "MIddleware auth failed ",
          error
        }) 
    }
}