import React from 'react'
import previous from '../icons/previous.png'
import next from '../icons/next.png'
import play from '../icons/play.png'
import pause from '../icons/pause.png'

export default function Player(props) {
    return (
        <div>
            <nav className='navbar fixed-bottom navbar-expand-lg bg-light justify-content-center d-flex flex-column'>
                <input className='w-100' type="range" min="0" max="100" value={props.newTime}
                    onChange={props.onchange} />
                <div className='align-items-center d-flex flex-row'>
                    <img className='mx-2' src={props.displayImage} style={{width:'50px', height:'50px',border:'1px solid black',
                         borderRadius:'10px' }} ></img>
                    <strong style={{width:'200px'}}>{props.displaySong}</strong>
                    <img src={previous} onClick={props.handleprevious} ></img>
                    <img src={props.playpause == 'pause' ? pause : play} onClick={props.handlemasterplay} ></img>
                    <img src={next} onClick={props.handlenext} ></img>
                </div>
            </nav>
        </div>
    )
}
