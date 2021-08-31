import sequelize from 'sequelize';

interface ITModel extends sequelize.Model{
  
  id: string;
  category: string;
  description: string;
  createdAt: Date;
}

export default ITModel;