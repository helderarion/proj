import React, {useState} from 'react'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { sign } from 'crypto'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()

        try{
            const auth =getAuth()
            signInWithEmailAndPassword(auth, email,password).then(
                (userCredential) => {
                    const user = userCredential.user
                    console.log (user)
                }).catch(
                    (error) => {
                        const errorCode= error.code
                        const errorMessage = error.message
                        console.log (errorCode)
                        console.log(errorMessage)
                    }
                )
            }catch (err: any){
                setError('Erro ao fazer login' + err.message)
            }
    }


return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit"> Entrar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        </div>)
}
    


export default Login