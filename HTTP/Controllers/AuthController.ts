
import express, {Request, RequestHandler, Response} from "express";
//import passport from'passport';
import GoogleAuthService from "../../app/Services/GoogleAuthService";
import Google from "../../config/Google";
const router = express.Router();

class AuthController{
    static getLoginUrlController: RequestHandler<{}, any, any, ParsedQs, Record<string, any>>;
    static getCurrentUserController: RequestHandler<{}, any, any, ParsedQs, Record<string, any>>;


  async getLoginUrlController(req: Request, res: Response) {

    const auth = await GoogleAuthService.getLoginUrl();
    res.status(200).send(auth);
}


async getCurrentUserController(req: Request, res: Response){
  const auth = await GoogleAuthService.getCurrentUser();

  res.send(auth);
  console.log("get me");
  

}

  async getTokensCOntroller(req: Request, res:Response) {
  const auth = await GoogleAuthService.getTokens();

  res.status(200).send(auth);
}

  async userCodeController(req: Request, res: Response){
  const auth = await GoogleAuthService.googleUserCode();
  
}



}

export default AuthController;