
import UserModel from '../database/mysql/models/UserModel';
import IUStore from '../Stores/IUStore';

class UserStore implements IUStore{
  UserModel: any;
  model: any;
  

  add(id: string, googleId: string, name: string, email: string, createdAt: date){
    const newUser = {id, googleId, name, email, createdAt};
    const user = new this.UserModel(newUser);

    return user.save();
  }


  findAll() {
    return this.UserModel.find();
  }


  findById(id) {
    return this.UserModel.findById(id);
  }


  deleteById(id) {
    return this.UserModel.findByIdAndDelete(id);
  }

  updateById(id, object) {
    const query = { _id: id };
    return this.UserModel.findOneAndUpdate(query, { $set: { name: object.name, email: object.email, createdAt: object.date} });
  }
}

export default UserStore;