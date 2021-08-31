import { request, response, Router } from 'express';
const router = Router();

const serverRoute = async (req: Request, res: Response) => {
(err: any, task: any) => {
    if(err){
        console.log('Error in Starting Server');
        return;
    }
  return response.json("OK") };

}

module.exports = {
    serverRoute
};

