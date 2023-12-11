import { useState } from "react"
import "./form_add_user.css"
import { saveUser } from '../../services'

export function FormAddUser({ setUser, handleSubmitCreateUser, handleSubmitLogin, successLog}){
    const [error, setError] = useState(false)
    const [isUser, setIsUser] = useState(true)
    const [confPassword, setConfPassword] = useState("")
    const [messageError, setMessageError] = useState("")
    const [formValues, setFormValues] = useState({
        name: '',
        last_name: '',
        user_name: '',
        age: 0,
        email: '',
        password: ''
    })

    const _handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const _handleSubmit = (e) => {
        if (isUser){
            handleSubmitLogin({...formValues})
        }else {
            if (formValues.password != confPassword){
                setError(true)
                setMessageError("Las contraseñas no coinciden")
            }else {
                handleSubmitCreateUser({...formValues})
                setIsUser(true)
                setFormValues({
                    name: '',
                    last_name: '',
                    user_name: '',
                    age: 0,
                    email: '',
                    password: ''
                })
            }
        }
        setUser({user_name: formValues.user_name, email: formValues.email})
        //handleSubmit({ ...formValues })
        //setError(false)
        
    }

    const _handleCreateUser = () => {
        console.log(isUser)
        setIsUser(false)
    }

    return (
        <section>
            <h2>{!isUser ? "Crear usuario" : "Bienvenido de Nuevo"}</h2>
            {isUser && <h3>Inicie sesión</h3>}
            <form action="" className="form" onSubmit={_handleSubmit}>
                <p hidden={isUser} >Nombre</p>
                <input type="text"
                value={formValues.name}
                onChange={e => setFormValues({... formValues, name: e.target.value})}
                hidden={isUser}
                />
                <p hidden={isUser} >Apellido</p>
                <input type="text"
                value={formValues.last_name}
                onChange={e => setFormValues({... formValues, last_name: e.target.value})}
                hidden={isUser}
                />
                <p hidden={isUser} >Nombre de Usuario</p>
                <input type="text"
                value={formValues.user_name}
                onChange={e => setFormValues({... formValues, user_name: e.target.value})}
                hidden={isUser}
                />
                <p>Correo Electronico</p>
                <input type="email"
                value={formValues.email}
                onChange={e => setFormValues({... formValues, email: e.target.value})}
                />
                <p>Contraseña</p>
                <input type="password" 
                value={formValues.password}
                onChange={e => setFormValues({... formValues, password: e.target.value})}
                />
                <p hidden={isUser} >Confirme Contraseña</p>
                <input type="password" 
                value={confPassword}
                onChange={e => setConfPassword(e.target.value)}
                hidden={isUser}
                />
                <a href="#" onClick={_handleCreateUser} hidden={!isUser}> Aún no soy usuario </a>
                <br />
                {error && <p>{messageError}</p>}
                <button>{!isUser ? "Crear usuario" : "Iniciar sesión"}</button>
            </form>
            {!successLog && <p>Error al Iniciar Sesión</p>}
        </section>
    )
}