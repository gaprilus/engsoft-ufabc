import React, {Component} from 'react'

export default class Navbar extends Component {

    render() {
        return (

            <>
            <header>
            <div>
                <h1>SMA Handshake</h1>
            </div>
            <div className='login-div'>
                <form>
                <label>Usuário</label>
                <input></input>
                <label>Senha</label>
                <input></input>
                <button>Entrar</button>
                </form>
                <a href='cadastro'>Cadastrar-se</a>
            </div>
            </header>
            </>

        )
    }

}