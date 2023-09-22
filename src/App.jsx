import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
  <>
  <nav className='nav'>
    <header className='page-header'>
      <a href='#'>
      <img className='linkedin-svg' src='/public/img/LinkedIn_Logo.svg'/>
      </a>
    </header>
  </nav>

  <main className='main-content'>
    <div className='card'>
      <form className='join-form'>
        <h1 className='title'>Cadastre-se no LinkedIn</h1>
        <section className='form-body'>
          <div className='form-container'>
            <div className='input-container'>
              <div className='input'>
                <input className='input-input' placeholder='E-mail'/>
              </div>
              <div className='input'>
                <input className='input-input'placeholder='Senha (+ de 8 caracteres)' type='password'/>
              </div>
            </div>
            <p className='text'> Ao clicar em Aceite e cadastre-se, você aceita o <a href='#'> Contrato do Usuário </a>, a <a href='#'> Política de Privacidade </a> e a <a href='#'> Política de Cookies </a> do LinkedIn. </p>
            <button className='submit-button'> Aceite e cadastre-se </button>
            <div className='google-join-container'>
              <div className='join-option'>
                <span className='join-line'>
                  <span className='line'>
                  </span>
                  <span className='join-content'>
                    <span className='or'> ou </span>
                    <button className='google-button'>Continuar com o Google</button>
                    <p> Já faz parte do LinkedIn? <a href='#'>Entre</a></p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  </main>
  <footer className='footer-page'>
    <ul className='footer-list'>
      <li><a href='#'>Acessibilidade</a></li>
      <li><a href='#'>Política de Privacidade do LinkedIn</a></li>
      <li><a href='#'>Política de Direitos Autorais</a></li>
      <li><a href='#'>Controle de visitantes</a></li>
      <li><a href='#'>Idioma</a></li>
      <li><a href='#'>Sobre</a></li>
      <li><a href='#'>Contrato do Usuário</a></li>
      <li><a href='#'>Política de Cookies</a></li>
      <li><a href='#'>Política da Marca</a></li>
      <li><a href='#'>Diretrizes da comunidade</a></li>
    </ul>
  </footer>
  </>
  )
}

export default App
