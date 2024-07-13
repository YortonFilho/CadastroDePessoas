import style from './Login.module.css';
import image from '../../images/backgroundImage.png';
import { Link } from 'react-router-dom';

export function Login(){
    return(
        <>
            <div className={style.background}>
                <img src={image} alt="Imagem de fundo"/>
            </div>

            <section className={style.loginArea}>
                <form action="" className={style.form}>
                    <h1>Bem vindo</h1>

                    <div className={style.email}>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Email"/>
                    </div>

                    <div className={style.password}>
                        <label for="password">Senha</label>
                        <input type="password" id="password" placeholder="Senha"/>
                    </div>

                    <Link to='/tabela'><button>Login</button></Link>
                </form>
            </section>
        </>
    )
}