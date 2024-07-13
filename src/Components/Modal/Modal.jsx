import style from './Modal.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export function Modal({ title, isOpen, setOpenModal, children }){
    if(isOpen){
        return(
            <div className={style.content}>
                <div className={style.janelaModal}>
                    <div className={style.header}>
                        <h2>{title}</h2>
                        <button className={style.close} onClick={setOpenModal}><CloseRoundedIcon/></button>
                    </div>

                    { children }
                </div>
            </div>
        )
    }

    return null
}