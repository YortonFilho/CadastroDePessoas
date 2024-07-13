import style from './Users.module.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { FormEditUser } from '../FormEditUser/FormEditUser';
import { Modal } from '../Modal/Modal';
import { useEffect, useState } from 'react';

export function Users({ id, name, email, level}){
    const [openModal, setOpenModal] = useState(false)

    return(
        <>
            <tbody>
                    <tr>
                        <td><Link to={`/usuario/${id}`} className={style.nameList}><button>{name}</button></Link></td>
                        <td>{email}</td>
                        <td>{level}</td>
                        <td className={style.icons}>
                            <button onClick={() => setOpenModal(true)}><EditOutlinedIcon sx={{ color: "#065D2F", fontSize: 28 }}/></button>
                            <button><DeleteOutlineOutlinedIcon sx={{ color: "red", fontSize: 28 }}/></button>
                        </td>
                    </tr>
            </tbody>
            
            <Modal title="Editar usuário" isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
                <FormEditUser id={id}/>
            </Modal>
        </>
    )
}