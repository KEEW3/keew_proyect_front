import axios from 'axios'

export async function saveUser(userData) {
    try{
        const response = await axios({
            url: 'http://localhost:5000/add_user',
            method: "POST",
            data: userData
        })
        return response
    }catch (e){
        console.log(e)
    }
}

export async function login(userData) {
    var userLogin = {email : userData.email,
                 password: userData.password}
    try{
        const response = await axios({
            url: 'http://localhost:5000/login',
            method: "POST",
            data: userLogin
        })
        return response
    }catch (e){
        console.log(e)
    }
}