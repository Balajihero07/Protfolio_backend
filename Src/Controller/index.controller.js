const { body } = require('express-validator');
const{ uploadcontact, getContacts,} = require('../Service/contact');
const { response } = require('express');
exports.uploadContactByUser = async(req , res ) =>{
    try{
        const {contact_name,contact_mobileno,contact_emailid,contact_message} = req.body 
        const result = await uploadcontact(contact_name,contact_mobileno,contact_emailid,contact_message);
              if (result && result.affectedRows === 1) {
             return res.status(200).json({
             response: "success",
             response_code: 200,
             message: "successfully contacted bala"
        });
      }
      throw new Error("Insert failed");
    }
    catch(error)
    {
        console.error("The error in controller upload conatct by user:",error);
        return res.status(500).json({
        response: "error",
        response_code: 500,
        message: "Cannot upload the contact. Please try again"
      });
    }
}
//user can contact me 
exports.getContactByAdmin = async(req,res)=>{
    try{
         const result = await getContacts();
         if(!result || result.length === 0)
         {
            return res.status(200).json({
                response:"error",
                response_code:200,
                message:"There is  no contact"
            })
         }
        return res.status(200).json({
        response: 'success',
        response_code: 200,
        message: 'Contact Found',
        result: {
          stories: result
        },
      });
    }
    catch(error)
    {
        console.error("The error for get contact by user:",error)
        return res.status(500).json({
        response: "error",
        response_code: 500,
        message: "Cannot get the contact. Please try again"
      });
    }
}
// exports.deletemessage = async(req,res)=>{
//   try{
//     const {id} = req.body;
//     result = await delmessage(id);
//     if(result && result.affectedRows ==1 )
//     {
//       return res.status(200).json({
//         response:'Success',
//         message:'Delete message successfully'
//       })
//     }
//     else{
//       return res.status(500).json({
//         response:"Faild",
//         message:"Record not found"
//       })
//     }
//   }catch(error){
//     return res.status(500).json({
//       response:"error",
//       message:error
//     })
//   }
// }
