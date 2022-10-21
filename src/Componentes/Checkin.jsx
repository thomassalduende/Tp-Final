import React from "react";
import '../Styles/Login-Chekin.css';

const Checkin = () => {
    return ( 
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">
                        Bienvenido
                    </div>
                    <div class="ing">
                        Por favor, ingrese su cuenta
                    </div>
                    <form id="loginform">
                        <input type="text" name="usuario" placeholder="Usuario" required/>
                        
                        <input type="password" placeholder="Contraseña" name="password" required/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">REGISTRARME</button>
                    </form>

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
            
     );
}
 
export default Checkin;