import "../../assets/style/Information.css"
import img from "../../img/img1.jpeg"
import img2 from "../../img/image2.png"

function Information() {
    return ( 
        <div className="header-formation">
            <div className="text2">
            <h1 className="text">Acerca de Mi</h1>
            <p>Estoy cursando la carrera de Ing. en desarrollo de Software <br/> por lo que todavia me ando <br/>
             experimentando, tengo conocimiento con algunos lenguages. <br/> Y experiencias con proyectos y trabajos en equipos.</p>
            </div>
            <div className="img">
                <img src={img} width="800px" height="200px"/>
            </div>
            
        </div>
     );
}

export default Information;