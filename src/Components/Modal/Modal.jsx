import { useState } from 'react';
import style from './Modal.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function Modal({ isOpen, setOpenModal }){



    if(isOpen){
        return(
            <>
                <div className={style.janelaModal}>
                    
                    <form action="">

                        <div className={style.header}>
                            <h2>Editar usuário</h2>
                            <button className={style.close} onClick={setOpenModal}><CloseRoundedIcon/></button>
                        </div>

                        <div className={style.name}>
                            <label for="nome">Nome</label>
                            <input type="text" id="nome" placeholder="Nome"/>
                        </div>

                        <div className={style.email}>
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Email"/>
                        </div>

                        <div className={style.level}>
                            <label for="level">Nível de acesso</label>
                            <input type="number" id="level" placeholder="Nível de acesso"/>
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
                </div>
            </>
        )
    }

    return null
}