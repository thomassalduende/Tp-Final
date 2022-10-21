import React from "react";
import '../Styles/ResetPassword.css';
const ResetPasswoed = () => {
    return ( 
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">
                        CHEQUEE SU EMAIL
                    </div>
                    <div class="sub-tit">
                        Le hemos enviado su codigo a su email
                    </div>
                    <div className="cod">
                        <input className="in" type="text" />
                        <input className="in" type="text" />
                        <input className="in" type="text" />
                        <input className="in" type="text" />

                    </div>
                    <div class="text">
                            Su codigo espira en ..
                        </div>
                    <form id="loginform">
                        <button type="submit" title="Ingresar" name="Ingresar">VERIFICAR</button>
                        <button className="solicitar" type="submit" >SOLICITAR DE NUEVO</button>

                    </form>


                    

                </div>

            </div>
        </div>
     );
}
 
export default ResetPasswoed;