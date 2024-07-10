import { Link } from 'react-router-dom';
import style from './UserPage.module.css';

export function UserPage(){
    return(
        <div className={style.container}>
            <section className={style.userPage}>
                <header className={style.header}>
                    <div className={style.perfil}>
                        <p className={style.pic}>YM</p>
                        <p className={style.userName}>Yorton Morschbarcher</p>
                    </div>

                    <Link to='/tabela'><button>Voltar para tabela</button></Link>
                </header>

                <section className={style.info}>
                    <h1>Informações</h1>
                        
                        <div className={style.name}>
                            <label for="name">Nome</label>
                            <input type="text" value='Yorton' disabled/>
                        </div>

                        <div className={style.email}>
                            <label for="name">Email</label>
                            <input type="email" value='Yorton@hotmail.com' disabled/>
                        </div>

                        <div className={style.level}>
                            <label for="level">Nível de Acesso</label>
                            <input type="number" value='5' disabled/>
                        </div>

                    <div className={style.passArea}>
                        <div className={style.password}>
                            <label for="password">Senha</label>
                            <input type="text" value='119611' disabled/>
                        </div>

                        <div className={style.confirmPass}>
                            <label for="confirmPass">Confirmar senha</label>
                            <input type="text" value='Yorton' disabled/>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    )
}