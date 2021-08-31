import validateCredentials from './GoogleAuthService';
import generateCredentials from './GoogleAuthService';
import getTodo from './TodoService';
import addTodo from './TodoService';
import removeTodo from './TodoService';

interface IAuthService{

    validateCredentials: validateCredentials;
    generateCredentials: generateCredentials;

    getTodo: getTodo;
    addTodo: addTodo;
    removeTodo: removeTodo;

}

export default IAuthService;
