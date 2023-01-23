import "../../assets/style/Header.css"
import Foto from "../../../src/img/Perfil.jpeg"
function Header() {
    return ( 
        <header>
            <div className="header">
            <img className="perfil" src={Foto} alt="perfil" />
            
            </div>
            <div className="tex">
            <h1>Alan David Balbuena Zavala</h1>
            <h2>Estudiante de Ingeniería en Desarrollo de Software</h2>
            </div>
            
        </header>
     );
}

export default Header;