export function Home ({ user, setUser }) {

    const handlerLogOut = (e) => {
        e.preventDefault()
        setUser([])
    }

    return(
        <div>
            <h1>Bienvenido {user}</h1>
            <button onClick={handlerLogOut}>Cerrar Sesion</button>
        </div>
    )
}