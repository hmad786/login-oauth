import sequelize from 'sequelize';
import Sequelize from 'sequelize/types/lib/sequelize';

interface IModel extends sequelize.Model{
  category: string;
  description: string;
  
  id: string;
  googleId: string;
  name: string;
  emails: string;
  createdAt: Date;
}

export default IModel;