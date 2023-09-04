import { useState} from 'react';

import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    async function handleRegister(e){
      e.preventDefault();

      if(email !== '' && password !==  '') {
        await createUserWithEmailAndPassword(auth,email,password)
        .then(()=> {
          navigate('/admin', { replace: true } )
        })
        .catch(() => {
          console.log("Erro ao fazer o cadastro.")
        })
      }else{
        console.log("Preencha todos os campos!")
      }
    }


    return(
      <div className="home-container">
        <h1>Cadastre-se</h1>
        <span>Vamos criar sua conta!</span>

        <form className="form" onSubmit={handleRegister}>
          <input 
          required
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}>

          </input>

          <input 
          required
          type="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}>
          
          </input>

          <button type="submit">Cadastrar</button>
        </form>

        <Link className="button-link" to="/">
          Já possui uma conta? Faça o login!
        </Link>
      </div>
    );
  }