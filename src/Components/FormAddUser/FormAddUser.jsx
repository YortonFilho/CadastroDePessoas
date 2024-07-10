import style from './FormAddUser.module.css';

export function FormAddUser(){
    return(
        <form className={style.form}>
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
        </form>
    )
}