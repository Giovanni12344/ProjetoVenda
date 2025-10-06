import "./Signin.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Signin() {
  return (
    <div className="container">
      <div className="card">
        <h2>Entre na sua conta e negocie com segurança!</h2>
        <p>acesse e aproveite uma expêriencia dentro da GOM</p>
    

      <div className="socialLogin">
        <button className="google">
          <FcGoogle size={24} />
        </button>
        <button className="facebook">
          <FaFacebookF size={24} />
        </button>
      </div>

      <div className="divider">
        <span>Ou connect com</span>
      </div>

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="digite sei amail" />

      <button className="acessarBtn">Acesar</button>

      <p className="register">
        Não tem conta ainda ?<a href="/SignUp">Cadastre-se</a>

      </p>
      </div>

      <p className='terms'>
        Ao continuar, você concorda com nossos <a href="/">Termos de Serviço</a> e 
        <a href="/">Política de Privacidade</a> da GOM e seus parceiros, e em receber
        comunicações da GOM
      </p> 
    </div>
  );
}
