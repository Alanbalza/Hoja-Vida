import { Link } from "react-router-dom";
import Header from "../components/atoms/Header";
import Information from "../components/atoms/Information";
import Tegnology from "../components/atoms/Tegnology";
import Experience from "../components/atoms/Experience";
function Home() {
    return ( 
      <>
        <div id="padre">
        <Header></Header>
        
        <Information></Information>
        
        <Tegnology></Tegnology>
        
        <Experience></Experience> 
        </div>
        </> 
     );
     
}

export default Home;