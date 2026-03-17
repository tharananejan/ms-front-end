import styles from './Backgroundgif.module.css'
import { useRef, useState, useEffect } from 'react';
import backgroundH264 from '../assets/backgroundv4.mp4'
import backgroundH265 from '../assets/backgroundv3.mp4'

function Backgroundgif({ scrollVal }) {
    //detect apple or not

    const [backgroundSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        // Detects iPhone, iPad, iPod, and Mac (which all use WebKit/Safari engine)
        const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;

        if (isApple) {
            setVideoSrc(backgroundH264); //H.264 version
        } else {
            setVideoSrc(backgroundH265); //H.265 version
        }
    }, []);



    const videoRef = useRef(null);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(16);


    useEffect(() => {

        const video = videoRef.current;
        if (!video || !backgroundSrc) return;
        video.muted = true;//apple case eka video ek mute krnw force krl

        const applyJump = () =>{
            if (scrollVal) {
                video.currentTime = 23;
                setStartTime(22);
                setEndTime(32);
            } else {
                video.currentTime = 0;
                setStartTime(0);
                setEndTime(16);
            }
            video.play().catch(error => {
                console.log("Autoplay blocked/interrupted:", error);
            });

        }
        if (video.readyState >= 1) {
            applyJump();
        } else {
            video.addEventListener('loadedmetadata', applyJump, { once: true });
        }

        return () => video.removeEventListener('loadedmetadata', applyJump);

    }, [scrollVal,backgroundSrc]);


    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video || video.seeking) return;



        // If the video plays past the end point, jump back to start
        if (video.currentTime >= endTime) {
            video.currentTime = startTime;
            video.play(); // Ensure it keeps playing
        }
    };

    const handleLoadedMetadata = () => {
        // Start the video at the beginning of  loop segment
        videoRef.current.currentTime = startTime;
    };
    if (!backgroundSrc) return null;
    return (
        <video
            ref={videoRef}
            key={backgroundSrc}
            className={styles.backgroundSection}
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
        >
            <source src={backgroundSrc} type="video/mp4" />
        </video>
    )
}

export default Backgroundgif;
