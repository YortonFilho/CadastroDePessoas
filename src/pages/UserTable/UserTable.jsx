import style from './UserTable.module.css';

export function UserTable(){
    return(
        <div className={style.container}>
            <section className={style.table}>
                <header>
                    <h2>Usuários</h2>
                    <button>Adicionar usuário</button>
                </header>

                <div className={style.category}>
                    <p>NOME</p>
                    <p>EMAIL</p>
                    <p>NÍVEL DE ACESSO</p>
                </div>

                <div className={style.list}>
                    <div className={style.user}>
                        <p>Ricardo Oliveira Lima</p>
                        <p>ricardo.santos@gmail.com.br</p>
                        <p>5</p>

                        <div className={style.icons}>
                            <i class="bi bi-pencil"></i>
                            <i class="bi bi-trash"></i>
                        </div>

                    </div>
                </div>
            </section>

            <div className={style.janelaModal}>
                
                <form action="">
                    <div className={style.header}>
                        <h2>Editar usuário</h2>
                        <button className={style.close}><i class="bi bi-x-lg"></i></button>
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

                    <input type="submit" value="Salvar" className={style.submit}/>
                </form>
            </div>
        </div>
    )
}