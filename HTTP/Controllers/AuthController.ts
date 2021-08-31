
import express, {Request, RequestHandler, Response} from "express";
//import passport from'passport';
import GoogleAuthService from "../../app/Services/GoogleAuthService";
import Google from "../../config/Google";
const router = express.Router();

class AuthController{
//  static getLoginUrlController: RequestHandler<{}, any, any, ParsedQs, Record<string, any>>;

  async getLoginUrlController(req: Request, res: Response) {

    const auth = await GoogleAuthService.getLoginUrl();
    res.status(200).send(auth);
}


getCurrentUserController(){
  

}



}

export default AuthController;