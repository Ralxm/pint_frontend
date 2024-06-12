import React from 'react'
import '../Universal/index.css'

class LoginInput extends React.Component {
    render() {
        return (
            <div className='col-lg-5 col-sm-12 big-login-box'>
                <div className='login-text-div'>
                    <span>Login</span>
                </div>
                <div className='email-div'>
                    <input type='email' id='email-login' class='login-box' placeholder='  email'></input>
                </div>
                <div className='password-div'>
                    <input type='password' id='password-login' class='login-box' placeholder='  password'></input>
                </div>
                <div className='login-button-div'>
                    <input type='submit' id='login' class='login-button' value="Entrar" onClick={() => window.location = '#/mainpage'}></input>
                </div>
                <div className='login-separador'>
                    <div className='separador'>

                    </div>
                    <div className='separador-text'>
                        <span>Ou continuar com</span>
                    </div>
                    <div className='separador'>

                    </div>
                </div>
                <div className='google-login'>
                    <input type='submit' id='login' class='login-button-exterior' value="Entrar com Google"></input>
                </div>
                <div className='facebook-login'>
                    <input type='submit' id='login' class='login-button-exterior' value="Entrar com Facebook"></input>
                </div>
            </div>
        )
    }
}



export default LoginInput
