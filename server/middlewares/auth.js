import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const {token}=req.headers;
  if(!token){
    return res.json({
      success: false,
      message: 'No token provided'
    });
  }
  console.log("got token");
  

  try{
    const tokenDecode=jwt.verify(token, process.env.JWT_SECRET);
    console.log("token decoded", tokenDecode);
    if(tokenDecode.id){
      console.log("user id found in token", tokenDecode.id);
      if (!req.body) {
        req.body = {}; // make sure it's not undefined
      }
      req.body.userId=tokenDecode.id
    }
    else{
      return res.json({
        success:false, message:'Not authorized login'
      })
    }
    console.log("user id added to request body and next is called", req.body.userId);
    next()
  }
  catch(error){
    res.json({success:false, message:error.message})
  }
}

export default userAuth