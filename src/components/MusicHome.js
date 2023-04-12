import React from 'react'
import MusicItem from './MusicItem'
import Player from "./Player";
import { useState } from "react";
import song1 from '../songs/1.mp3'
import song2 from '../songs/2.mp3'
import song3 from '../songs/3.mp3'
import song4 from '../songs/4.mp3'
import song5 from '../songs/5.mp3'
import song6 from '../songs/6.mp3'
import song7 from '../songs/7.mp3'
import song8 from '../songs/8.mp3'
import song9 from '../songs/9.mp3'
import song10 from '../songs/10.mp3'

let songs = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10]
let x;
let i=0;

let audioElement1 = new Audio(song1);
let audioElement2 = new Audio(song2);
let audioElement3 = new Audio(song3);
let audioElement4 = new Audio(song4);
let audioElement5 = new Audio(song5);
let audioElement6 = new Audio(song6);
let audioElement7 = new Audio(song7);
let audioElement8 = new Audio(song8);
let audioElement9 = new Audio(song9);
let audioElement10 = new Audio(song10);
let audioElements = [audioElement1, audioElement2, audioElement3, audioElement4, audioElement5,
    audioElement6, audioElement7, audioElement8, audioElement9, audioElement10];


let previous=audioElements[0];
let progress;

export default function MusicHome() {

    const musicInfo = [{ name: "Tum Hi Ho", artist: "Arijit Singh", src: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg", songPath: song1 },
    { name: "Bhula Dena", artist: "Mustafa Zahid", src: "https://i.pinimg.com/originals/3f/1b/c5/3f1bc55e0f311306fb46558ec24b7471.jpg", songPath: song2 },
    { name: "Chahun Main Ya Naa", artist: "Arijit Singh", src: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg", songPath: song3 },
    { name: "Sunn Raha Hai", artist: "Ankit Tiwari", src: "https://wallpapers.com/images/hd/aashiqui-2-rahul-on-black-k425uxzb2fz4n7n6.jpg", songPath: song4 },
    { name: "Meri Aashiqui", artist: "Palak Muchhal", src: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg", songPath: song5 },
    { name: "Milne Hai Mujhse Aayi", artist: "Arijit Singh", src: "https://3.bp.blogspot.com/-DEKXuUu9egM/UasFVpdK7KI/AAAAAAAAAfs/sKQfa7XwyQg/s1600/aashiqui2wallpaper7.jpg", songPath: song6 },
    { name: "Piya Aaye Na", artist: "Tulsi Kumar", src: "https://i.pinimg.com/originals/3f/1b/c5/3f1bc55e0f311306fb46558ec24b7471.jpg", songPath: song7 },
    { name: "Until I Found You", artist: "Stephen Sanchez", src: "https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6", songPath: song8 },
    { name: "Mann Mera", artist: "Gajendra Verma", src: "https://c.saavncdn.com/475/Mann-Mera-From-Table-No-21-Lofi-Mix-Hindi-2022-20221013024218-500x500.jpg", songPath: song9 },
    { name: "Hum Mar Jayenge", artist: "Mustafa Zahid", src: "https://i.pinimg.com/originals/3f/1b/c5/3f1bc55e0f311306fb46558ec24b7471.jpg", songPath: song10 }
    ]

    const [playpause, setPlayPause] = useState('play');
    const [newTime, setNewTime] = useState(0);
    const [displaySong, setDisplaySong] = useState(musicInfo[i].name);
    const [displayImage, setDisplayImage] = useState(musicInfo[i].src);

    const handlemasterplay = () => {
        console.log("Hello");
        if (playpause == 'pause') {
            previous.pause();
            setPlayPause('play')
        }
        else if(playpause == 'play'){
            previous.play();
            setPlayPause('pause')
        }

    }

    const handleprevious = () => {
        if(i==0)
        {
            previous.pause();
            i=9;
            previous=audioElements[i];
            previous.currentTime=0;
            previous.play();
            setPlayPause('pause');
            setDisplaySong(musicInfo[i].name);
            setDisplayImage(musicInfo[i].src);
        }
        else{
            previous.pause();
            i--;
            previous=audioElements[i];
            previous.currentTime=0;
            previous.play();
            setPlayPause('pause');
            setDisplaySong(musicInfo[i].name);
            setDisplayImage(musicInfo[i].src);
        }
    }

    const handlenext = () => {
        if(i==9){
            previous.pause();
            i=0;
            previous=audioElements[i];
            previous.currentTime=0;
            previous.play();
            setPlayPause('pause');
            setDisplaySong(musicInfo[i].name);
            setDisplayImage(musicInfo[i].src);
        }
        else{
            previous.pause();
            i++;
            previous=audioElements[i];
            previous.currentTime=0;
            previous.play();
            setPlayPause('pause');
            setDisplaySong(musicInfo[i].name);
            setDisplayImage(musicInfo[i].src);
        }
    }

    const onchange = () => {
        previous.currentTime = (event.target.value*previous.duration)/100;
        // previous.play();
        if(playpause=='pause'){
            previous.play();
        }
    }

    audioElement1.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement2.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement3.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement4.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement5.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement6.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement7.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement8.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement9.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }
    audioElement10.ontimeupdate = () => {
        progress = parseInt((previous.currentTime/previous.duration)*100);
        setNewTime(progress);
        if(previous.currentTime==previous.duration){handlenext()}
    }

    const handlePlayButton1 = () => {
        i=0
        if(previous){previous.pause();}
        previous=audioElements[0];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);

    }
    const handlePlayButton2 = () => {
        i=1
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton3 = () => {
        i=2
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton4 = () => {
        i=3
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton5 = () => {
        i=4
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton6 = () => {
        i=5
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton7 = () => {
        i=6
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton8 = () => {
        i=7;
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton9 = () => {
        i=8;
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }
    const handlePlayButton10 = () => {
        i=9;
        if(previous){previous.pause();}
        previous=audioElements[i];
        previous.currentTime=0;
        previous.play();
        setPlayPause('pause');
        setDisplaySong(musicInfo[i].name);
        setDisplayImage(musicInfo[i].src);
    }


    return (
        <div>
            <div className='container my-5'>
                
                <div className='row'>
                    <div className='d-flex flex-row my-3'>
                        <MusicItem imgSrc={musicInfo[0].src} songName={musicInfo[0].name} singer={musicInfo[0].artist}
                            songPath={musicInfo[0].songPath} handlePlayButton={handlePlayButton1} />
                        <MusicItem imgSrc={musicInfo[1].src} songName={musicInfo[1].name} singer={musicInfo[1].artist}
                            songPath={musicInfo[1].songPath} handlePlayButton={handlePlayButton2} />
                        <MusicItem imgSrc={musicInfo[2].src} songName={musicInfo[2].name} singer={musicInfo[2].artist}
                            songPath={musicInfo[2].songPath} handlePlayButton={handlePlayButton3} />
                    </div>
                    <div className='d-flex flex-row my-3'>
                        <MusicItem imgSrc={musicInfo[3].src} songName={musicInfo[3].name} singer={musicInfo[3].artist}
                            songPath={musicInfo[3].songPath} handlePlayButton={handlePlayButton4} />
                        <MusicItem imgSrc={musicInfo[4].src} songName={musicInfo[4].name} singer={musicInfo[4].artist}
                            songPath={musicInfo[4].songPath} handlePlayButton={handlePlayButton5} />
                        <MusicItem imgSrc={musicInfo[5].src} songName={musicInfo[5].name} singer={musicInfo[5].artist}
                            songPath={musicInfo[5].songPath} handlePlayButton={handlePlayButton6} />
                    </div>
                    <div className='d-flex flex-row my-3'>
                        <MusicItem imgSrc={musicInfo[6].src} songName={musicInfo[6].name} singer={musicInfo[6].artist}
                            songPath={musicInfo[0].songPath} handlePlayButton={handlePlayButton7} />
                        <MusicItem imgSrc={musicInfo[7].src} songName={musicInfo[7].name} singer={musicInfo[7].artist}
                            songPath={musicInfo[7].songPath} handlePlayButton={handlePlayButton8} />
                        <MusicItem imgSrc={musicInfo[8].src} songName={musicInfo[8].name} singer={musicInfo[8].artist}
                            songPath={musicInfo[8].songPath} handlePlayButton={handlePlayButton9} />
                    </div>
                    <div className='d-flex flex-row my-3'>
                        <MusicItem imgSrc={musicInfo[9].src} songName={musicInfo[9].name} singer={musicInfo[9].artist}
                            songPath={musicInfo[9].songPath} handlePlayButton={handlePlayButton10} />
                    </div>
                </div>
            </div>
            <Player newTime={newTime} onchange={onchange} handlemasterplay={handlemasterplay} playpause={playpause} 
                    handlenext={handlenext} handleprevious={handleprevious} displaySong={displaySong} 
                    displayImage={displayImage} />
        </div>
    )
}
