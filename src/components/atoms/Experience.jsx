import "../../assets/style/Experience.css"
import computer from "../../img/Computer.png"
import Learning from "../../img/Learning.png"

function Experience() {
    return ( 
        <div className="header-experience">
            <div className="text-exp">
                <h1>Experiencia laboral</h1>
            </div>
            <div className="text-com">
            <img className="computer" src={computer}  width="30px"/>
            <h1>Proyecto <br/>integrador</h1>
            </div>
            <div className="text-com1"><h2 className="text-com2">Se confoma por equipo de tres personas y se hacen propuesta para desarrollar un proyecto.
            <div className="text-lear">
            <img className="lear" src={Learning} width="30px"/>
            <h1>texcology</h1>
            <h2 className="text-lear2">Aplicacion web que se basaba en donaciones de ropa para personas de bajos recursos de manera segura.</h2>
            </div>
            
            </h2></div>
            <div >
                
            </div>
        </div>
     );
}

export default Experience;
