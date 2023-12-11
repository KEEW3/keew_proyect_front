import { useState } from 'react'
import './App.css'
import { FormAddUser } from './components/add_user/form_add_user'
import { Home } from './components/home'
import { login, saveUser } from './services'

function App() {
  const [successLog, setSuccessLog] = useState(true)
  const [isLogin, setIsLogin] = useState(false)
  
  const [user, setUser] = useState({
        user_name: '',
        email: ''
  })

  const handleSubmitCreateUser = (data) => {
    saveUser(data)
  }

  const handleSubmitLogin = (data) => {
    var response = login(data)
    response.then((resp) => {
      if ( resp.status == 200){
        setIsLogin(true)
      }else {
        setSuccessLog(false)
      }
    })
  }

  return (
    <>
      {
        isLogin
        ? <Home />
        : <FormAddUser setUser = {setUser} handleSubmitCreateUser = {handleSubmitCreateUser}  handleSubmitLogin = {handleSubmitLogin} successLog = {successLog}/>       
      }
    </>
  )
}

export default App
