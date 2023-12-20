import Video from "../assets/Video.mp4";
import Detail_Card from "./Detail_Card";
import Summit from "../assets/A_Summit.png";
import Flagship from "../assets/A.png";
import Footer from "./Footer";

export default function LandingPage(){
    return(
        <div>
            <div id="videoplayer">
                <video id="video" controls autoPlay muted loop>
                    <source src={Video} type="video/mp4"/>
                </video>

                <button id="collection">
                    <p>
                        SHOP THE COLLECTION
                    </p>
                </button>

            </div>

            <div id="collection-grid">
                <Detail_Card title="SUMMIT COLLECTION" image={Summit}/>
                <Detail_Card title="FLAGSHIP COLLECTION" image={Flagship}/>
            </div>
            <Footer/>

        </div>

    );
}