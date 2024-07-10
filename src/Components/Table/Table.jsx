import style from './Table.module.css';
import { useState } from 'react';
import { Modal } from '../../Components/Modal/Modal';
import { Users } from '../Users/Users';
import usersInfo from '../../json/db.json';

export function Table(){
    const [openModal, setOpenModal] = useState(false)

    return(
        <div className={style.container}>
            <section className={style.table}>
                <header>
                    <h2>Usuários</h2>
                    <button onClick={() => setOpenModal(true)}>Adicionar usuário</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            <th className={style.nameTable}>Nome</th>
                            <th>Email</th>
                            <th>Nível de Acesso</th>
                            <th></th>
                        </tr>
                    </thead>

                    {usersInfo.map(usersInfo => <Users key={usersInfo.id} id={usersInfo.id} name={usersInfo.name} email={usersInfo.email} level={usersInfo.level}/>)}
                </table>

            </section>
            <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}/>
        </div>
    )
} 