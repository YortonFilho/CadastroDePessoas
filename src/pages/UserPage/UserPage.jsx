import { Link, useParams } from 'react-router-dom';
import style from './UserPage.module.css';
import { useEffect, useState } from 'react';

export function UserPage(){
    const {id} = useParams() 
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
        <div className={style.container}>
            <section className={style.userPage}>
                <header className={style.header}>
                    <div className={style.perfil}>
                        <p className={style.pic}>YM</p>
                        <p className={style.userName}>{users.name}</p>
                    </div>

                    <Link to='/tabela'><button>Voltar para tabela</button></Link>
                </header>

                <section className={style.info}>
                    <h1>Informações</h1>
                        
                        <div className={style.name}>
                            <label for="name">Nome</label>
                            <input type="text" value={users.name} disabled/>
                        </div>

                        <div className={style.email}>
                            <label for="name">Email</label>
                            <input type="email" value={users.email} disabled/>
                        </div>

                        <div className={style.level}>
                            <label for="level">Nível de Acesso</label>
                            <input type="number" value={users.accessLevel} disabled/>
                        </div>

                    <div className={style.passArea}>
                        <div className={style.password}>
                            <label for="password">Senha</label>
                            <input type="text" value={users.password} disabled/>
                        </div>

                        <div className={style.confirmPass}>
                            <label for="confirmPass">Confirmar senha</label>
                            <input type="text" value={users.password} disabled/>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}