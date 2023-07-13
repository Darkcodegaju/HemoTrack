const userModel = require("../models/userModel.js");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const registerController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      //validation
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "User ALready exists",
        });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
      //rest data
      const user = new userModel(req.body);
      await user.save();
      return res.status(201).send({
        success: true,
        message: "User Registerd Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Register API",
        error,
      });
    }
  };

const loginController = async (req,res)=>{
 
    try {
        const email = req.body.email;

        const existinguser = await userModel.findOne({email});
        if(!existinguser){
            return res.status(404).send({
                success : false,
                message: "User Not Found",
            })
        }
        // compring hash password ;
       if(existinguser.role != req.body.role)
       {
               return res.status(500).send({
                success : false,
                message : "Role Doesnot' match "  
               })
       }

        const comparepassword = await bcrypt.compare(req.body.password,existinguser.password);
        if(!comparepassword) {
            return res.status(500).send({
                success:false,
                message:"Invalid Password"
            })
        }

        /// now Generating the token 

        const token =  jwt.sign({userId :existinguser._id}, process.env.JWT_SECRET, {expiresIn:'1d'});
        return res.status(200).send({
            success : true,
            message: "Login SuccessFully",
            token,
            existinguser
        })



    } catch (error) {
     console.log(error);
      res.status(500).send({
        success : false,
        message: "Error in Login api error ",
        error
      }) 
    }
    
}


// Making currenct user controller 

const currentUserController = async(req,res)=>{
    try {
        // finding currennt user
        const curruser =  await userModel.findOne({_id:req.body.userId});
        return res.status(200).send({
            success:true,
            message:'User Fetch SuccessFully',
            curruser
        })
         
    } catch (error) {
        
         return  res.status(500).send({
            success : false,
            message: "Unable to get currenct User  ",
            error
          }) 
    }
}

module.exports = {registerController,loginController,currentUserController};