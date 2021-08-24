import '../Styles/Jumbotron.css';
import jumbotronImage from '../assets/img/jumbotronImage.png';

export default function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="backgroundImage">
                <JumbotronText />
            </div>
        </div>
    );
}

function JumbotronText() {
    return (
        <div className="jumbotronContent">
            <div className="jumbotronText">
                <h1>WAYSBUCKS</h1>
                <p className="tagline">Things are changing, but we’re still here for you</p>
                <p className="aboutWaysbucks">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. 
                <br />
                <b>Waysbucks</b> Drivers is also available</p>
                <p className="letsorder">Let’s Order...</p>
            </div>
            <img src={jumbotronImage} style={{width: '451px', height: '324px', marginTop: '20px'}} />      
        </div>
    )
}