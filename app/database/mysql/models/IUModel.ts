import sequelize from 'sequelize';

interface IUModel extends sequelize.Model{
  
  id: string;
  googleId: string;
  name: string;
  emails: string;
  createdAt: Date;
}

export default IUModel;