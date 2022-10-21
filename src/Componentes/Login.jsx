import React from "react";
import '../Styles/Login-Chekin.css'
import Header from "./Header";


const Login = () => {
    return ( 
        <nav>
            <Header/>
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">
                        Bienvenido
                    </div>
                    <div class="ing">
                        Por favor, ingrese con su cuenta
                    </div>
                    <form id="loginform">
                        <input type="text" name="usuario" placeholder="Usuario" required/>
                        
                        <input type="password" placeholder="Contraseña" name="password" required/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    <div class="pie-form">
                        <a href="/login/reset">¿Perdiste tu contraseña?</a>
                        <a href="#">¿No tienes Cuenta? Registrate</a>
                    </div>
                    <div className="google">
                        <div class="ing">
                            Continuar con Google
                        </div>
                    
                        <button  type="submit" title="Ingresar" name="Ingresar">Google</button>

                    </div>
                </div>
                <div class="inferior">
                    <a href="#">Volver</a>
                </div>
            </div>
        </div>
            
        </nav>
     );
}
 
export default Login;