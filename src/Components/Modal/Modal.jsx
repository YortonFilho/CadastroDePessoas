import { useState } from 'react';
import style from './Modal.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FormAddUser } from '../FormAddUser/FormAddUser';

export function Modal({ isOpen, setOpenModal }){



    if(isOpen){
        return(
            <>
                <div className={style.janelaModal}>

                    <div className={style.content}>
                        <div className={style.header}>
                            <h2>Adicionar usuário</h2>
                            <button className={style.close} onClick={setOpenModal}><CloseRoundedIcon/></button>
                        </div>

                        <FormAddUser/>

                        <div className={style.button}>
                            <input type="submit" value="Salvar" className={style.submit}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return null
}