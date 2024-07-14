import style from './UserTable.module.css';
import { useEffect, useState } from 'react';
import { Modal } from '../../Components/Modal/Modal';
import { Users } from '../../Components/Users/Users';
import { FormAddUser } from '../../Components/FormAddUser/FormAddUser';

export function UserTable(){
    const [openModal, setOpenModal] = useState(false)
    const [users, setUsers] = useState([])

    //extração de dados do banco de dados
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8080/users")
                const data = await response.json()
                setUsers(data)
            } 
            catch(error){
                console.error('Erro ao buscar dados!', error)
            }
        }
        fetchData()
    },[users])

    return(
        <div className={style.container}>
            <section className={style.table}>
                <header>
                    <h2>Usuários</h2>
                    <button onClick={() => setOpenModal(true)}>Adicionar usuário</button>
                </header>

                <div className={style.userList}>
                    <table>
                        <thead>
                            <tr>
                                <th className={style.nameList}>Nome</th>
                                <th>Email</th>
                                <th>Nível de Acesso</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        {users.map(users => <Users key={users.id} id={users.id} name={users.name} email={users.email} level={users.accessLevel}/>)}
                    </table>
                </div>
            </section>

            <Modal title="Adicionar usuário" isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
                <FormAddUser />
            </Modal>
        </div>
    )
} 