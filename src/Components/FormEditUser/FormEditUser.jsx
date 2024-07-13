import { useEffect, useState } from 'react';
import style from './FormEditUser.module.css';
import { useParams } from 'react-router-dom';

export function FormEditUser({ id }){
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

    if (!users){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

  return(
    <>
      <form className={style.form}>
            <div className={style.name}>
                <label for="name">Nome</label>
                <input value={users.name} type="text" id="name"/>
            </div>

            <div className={style.email}>
                <label for="email">Email</label>
                <input value={users.email} type="email" id="email"/>
            </div>

            <div className={style.level}>
                <label for="level">Nível de acesso</label>
                <input value={users.accessLevel} type="text" id="accessLevel" placeholder="Nível de acesso"/>
            </div>

            <div className={style.password}>
                <label for="password">Senha</label>
                <input type="password" id="password" placeholder="Senha"/>
            </div>
            
            <div className={style.confirmPass}>
                <label for="confirmPass">Confirmar senha</label>
                <input type="password" id="confirmPass" placeholder="Confirmar senha"/>
            </div>

            <div className={style.button}>
                <input type="submit" value="Salvar" className={style.submit}/>
            </div>
        </form>
    </>
  )
}