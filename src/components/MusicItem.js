
// let audioElement;

export default function MusicItem(props) {

    // const handleplaybutton = () => {
    //     audioElement = new Audio(props.songPath);
    //     audioElement.play();

    // }


    return (
        <div>
            <div className="card mx-2">
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{width:'430px', height:'430px'}} />
                <div className="card-body">
                    <h5 className="card-title">{props.songName}</h5>
                    Artist : <strong>{props.singer}</strong><br></br>
                    <button className="btn btn-primary" onClick={props.handlePlayButton} >Play Now</button>
                </div>
            </div>
        </div>
    )
}
