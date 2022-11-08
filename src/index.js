import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1 className='display-1'>login y registro-HappyRabbit</h1>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.getElementById("btn_registrarse").addEventListener("click", register);
document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);



let contenedor__login_register= document.querySelector(".contenedor_login-register");
let formulario__login = document.querySelector('.formulario_login');
let formulario__register = document.querySelector('.formulario_register');
let caja__trasera_login = document.querySelector('.caja_trasera-login');
let caja__trasera_register = document.querySelector('.caja_trasera-register');


function anchoPagina(){
    if(window.innerWidth > 850){
        caja__trasera_login.style.display = "block";
        caja__trasera_register.style.display = "block";
    }
    else{
        caja__trasera_login.style.display = "block";
        caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__register.style.display = "none";
        contenedor__login_register.style.left = "0px";

    }
}
anchoPagina();

function iniciarSesion(){
    
    if(window.innerWidth > 850){
        formulario__register.style.display = "none";
        contenedor__login_register.style.left = "10px";
        formulario__login.style.display = "block";
        caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.opacity = "0";
    }
    else{
        formulario__register.style.display = "none";
        contenedor__login_register.style.left = "0px";
        formulario__login.style.display = "block";
        caja__trasera_register.style.display = "block";
        caja__trasera_login.style.display = "none";
    }
} 


function register(){

    if(window.innerWidth > 850){
        formulario__register.style.display = "block";
        contenedor__login_register.style.left = "410px";
        formulario__login.style.display = "none";
        caja__trasera_register.style.opacity = "0";
        caja__trasera_login.style.opacity = "1";
    }
    else{
        formulario__register.style.display = "block";
        contenedor__login_register.style.left = "0px";
        formulario__login.style.display = "none";
        caja__trasera_register.style.display = "none";
        caja__trasera_login.style.display = "block";
        caja__trasera_login.style.opacity = "1";
    }

}
