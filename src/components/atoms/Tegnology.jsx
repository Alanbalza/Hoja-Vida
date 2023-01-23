import teg from "../../img/image2.png"
import "../../assets/style/Tegnology.css"
function Tegnology() {
    return ( 
        <div className="header-tegnology">
            <div className="tegn">
                <img src={teg} height="160px"/>
            </div>
            <div className="text-">
                <h1 className="text-teg" >Tegnologia</h1>
                <p> -HTML <br/>
                    -JAVASCRIP <br/>
                    -CSS <br/>
                    -C++</p>
            </div>
        </div>
     );
}

export default Tegnology;