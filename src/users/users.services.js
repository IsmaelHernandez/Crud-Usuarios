// Importamos los controllers
const usersControllers = require('./users.controllers')

// Servicio para obtener todos los users
const getAllUsers = (req, res) => {
    const data = usersControllers.getAllUsers()
    res.status(200).json(data)
}

// Servicio para obtener un users por id
const getUserById = (req, res) => {
    const id = req.params.id    
    const data = usersControllers.getUsersById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(400).json({messsage: 'Invalid ID'})
    }
}

// Servicio para crear un users
const postUsers = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body;
    if(first_name && last_name && email && password && birthday){
        const data = usersControllers.postUsers({
            first_name, 
            last_name, 
            email, 
            password, 
            birthday
        })
        res.status(200).json(data)
    }else{
        res.status(400).json({messsage: 'Invalid Data'})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postUsers,
}