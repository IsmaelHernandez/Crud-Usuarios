//Array para simular BD ficicia
const UsersBD = []
let id = 1

//Funcion para obtener todos los users
const getAllUsers = () => {
    return UsersBD
}

//Funcion para obtener un users mediante su id
const getUsersById = (id) => {
    const user = UsersBD.filter(item => item.id == id)
    return user
}

//Funcion para crear un nuevo users
const postUsers = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    UsersBD.push(newUser)
    return newUser
}


module.exports = {
    getAllUsers,
    getUsersById,
    postUsers,
}