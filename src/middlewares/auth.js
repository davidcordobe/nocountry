const verifyToken=require('../utils/generateToken')

export const checkAuth=async(req,res,next)=>{
  try {
    //const token = req.headers.authorization.split(' ').pop()
    const token = req.headers['x-access-token']
    const tokenData = await verifyToken(token)
    if(tokenData.email){
      req.tokenEmail=tokenData.email
      next()
    }else{
      res.status(409).json({error:'no autorizado'})
    }
  } catch (error) {
    console.log(error)
    res.status(409).json({error:'no autorizado'})
  }
}