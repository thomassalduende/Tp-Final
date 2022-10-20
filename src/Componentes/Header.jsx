import logo from '../assets/logo.png'
import '../Styles/Header.css'
const Header = () => {
  return ( 
    <nav>
        

        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <a href="#" class="enlace">
        </a>
          <img className='logo' src={logo} alt="" /> 
        <ul>
            <li><a className="fs-6 fw-light Italic" href="#">HOME</a></li>
            <li><a className="fs-6 fw-light Italic" href="#">NOVEDADES</a></li>
            <li><a className="fs-6 fw-light Italic" href="#">GENERO</a></li>
            <li><a className="fs-6 fw-light Italic" href="#">AUTOR</a></li>
            <li><a className="fs-6 fw-light Italic" href="#">CATEGORIA</a></li>
            <li><a className="fs-6 fw-light Italic" href="#">OFERTA</a></li>
            <li><a className="fs-6 fw-light Italic" href="#">RECOMENDADOS</a></li>
            <li class="other-button"><a className="fs-6 fw-bold" href="#">Registrarse</a></li>
            <li><a className="fs-6 fw-bold" href="#">Ingresar</a></li>
            <li><a className="fs-6 fw-bold" href="#">Favoritos</a></li>
        </ul>
    </nav>

    
  );
}
 
export default Header;