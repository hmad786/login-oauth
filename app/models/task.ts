
import * as Sequelize from "sequelize";

class Task extends Sequelize.Model {
    id : string | undefined;
    description: string | undefined;
    category: String | undefined;
    date: Date | undefined;

static InitTask = (sequelize: Sequelize.Sequelize) => {
    Task.init({
        id: Sequelize.DataTypes.UUID,
        description: Sequelize.DataTypes.STRING,
        category: Sequelize.DataTypes.STRING,
        createdAt: Sequelize.DataTypes.DATE
    }, {
        sequelize, tableName: "userTasks"
    })
};

}

export default Task;