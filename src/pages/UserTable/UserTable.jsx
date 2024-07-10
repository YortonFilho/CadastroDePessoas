import { useState } from 'react';
import { Modal } from '../../Components/Modal/Modal';
import style from './UserTable.module.css';
import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export function UserTable(){
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
                <tbody>
                    <tr>
                        <td className={style.nameList}>Yorton</td>
                        <td>Yorton@hptmail.com</td>
                        <td>5</td>
                        <td className={style.icons}>
                            <button><EditOutlinedIcon sx={{ color: "#065D2F", fontSize: 28 }}/></button>
                            <button><DeleteOutlineOutlinedIcon sx={{ color: "red", fontSize: 28 }}/></button>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className={style.nameList}>Yorton</td>
                        <td>Yorton@hptmail.com</td>
                        <td>5</td>
                        <td className={style.icons}>
                            <button><EditOutlinedIcon sx={{ color: "#065D2F", fontSize: 28 }}/></button>
                            <button><DeleteOutlineOutlinedIcon sx={{ color: "red", fontSize: 28 }}/></button>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className={style.nameList}>Yorton</td>
                        <td>Yorton@hptmail.com</td>
                        <td>5</td>
                        <td className={style.icons}>
                            <button><EditOutlinedIcon sx={{ color: "#065D2F", fontSize: 28 }}/></button>
                            <button><DeleteOutlineOutlinedIcon sx={{ color: "red", fontSize: 28 }}/></button>
                        </td>
                    </tr>
                </tbody>
            </table>

                <Link to='/usuario'><button>tabela testeeeeeeeeeee</button></Link>
            </section>

            <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}/>
        </div>
    )
}