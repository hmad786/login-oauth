interface ITStore{
    
    add();
    findAll();
    findById(id);
    deleteById(id);
    updateById(id, object);


}

export default ITStore;