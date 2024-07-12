import { useState } from 'react';
import style from './FormAddUser.module.css';

export function FormAddUser(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [accessLevel, setAccessLevel] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {name, email, accessLevel, password}

        try{
            const response = await fetch("http://localhost:8080/user", {
                method:"POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userData),
            })
            const data = await response.json()
            console.log(data)
            
        } 
        catch(error){
            console.error('Erro ao enviar dados!', error)
        }
    }

    return(
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.name}>
                <label for="name">Nome</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Nome"/>
            </div>

            <div className={style.email}>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"/>
            </div>

            <div className={style.level}>
                <label for="level">Nível de acesso</label>
                <input value={accessLevel} onChange={(e) => setAccessLevel(e.target.value)} type="text" id="accessLevel" placeholder="Nível de acesso"/>
            </div>

            <div className={style.password}>
                <label for="password">Senha</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Senha"/>
            </div>
            
            <div className={style.confirmPass}>
                <label for="confirmPass">Confirmar senha</label>
                <input type="password" id="confirmPass" placeholder="Confirmar senha"/>
            </div>

            <div className={style.button}>
                <input type="submit" value="Salvar" className={style.submit}/>
            </div>
        </form>
    )
}