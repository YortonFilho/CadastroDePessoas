import { useEffect, useState } from 'react';
import style from './FormEditUser.module.css';

export function FormEditUser({ id }){
    //extração dos dados do usuário
    const [users, setUsers] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`http://localhost:8080/user/${id}`)
                const data = await response.json()
                setUsers(data)
            } 
            catch(error){
                console.error('Erro ao buscar dados!', error)
            }
        }

        fetchData()
    },[users])

    //atualização dos dados do usuário
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [accessLevel, setAccessLevel] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword){
            window.alert('As senhas não são iguais! Tente novamente!')
            return;
        } else if(password === confirmPassword){
            window.alert('Usuário editado com sucesso!')
        }

        const userData = {name, email, accessLevel, password}

        try{
            const response = await fetch(`http://localhost:8080/user/${id}`, {
                method:"PUT",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userData),
            })    
        } 
        catch(error){
            console.error('Erro ao enviar dados!', error)
        }
    }

    if (!users){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

  return(
      <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.name}>
                <label for="name">Nome</label>
                <input value={name} placeholder={users.name} onChange={(e) => setName(e.target.value)} type="text" id="name"/>
            </div>

            <div className={style.email}>
                <label for="email">Email</label>
                <input value={email} placeholder={users.email} onChange={(e) => setEmail(e.target.value)} type="email" id="email"/>
            </div>

            <div className={style.level}>
                <label for="level">Nível de acesso</label>
                <input value={accessLevel} placeholder={users.accessLevel} onChange={(e) => setAccessLevel(e.target.value)} type="text" id="accessLevel"/>
            </div>

            <div className={style.password}>
                <label for="password">Senha</label>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Senha"/>
            </div>
            
            <div className={style.confirmPass}>
                <label for="confirmPass">Confirmar senha</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPass" placeholder="Confirmar senha"/>
            </div>

            <div className={style.button}>
                <input type="submit" value="Salvar" className={style.submit}/>
            </div>
        </form>
  )
}