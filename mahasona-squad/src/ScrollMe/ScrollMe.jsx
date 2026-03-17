import styles from './ScrollMe.module.css'
import { useEffect ,useState} from 'react';

function ScrollMe({scrollValue}){
    const [scrolled,setScrollStyle] = useState(false);
    useEffect(()=>{
        if(scrollValue){
            setScrollStyle(true);
        }else{
            setScrollStyle(false);
        }
    },[scrollValue]

    )

    return(
    <div className={scrolled? styles.scrollMarkVanish:styles.scrollMark}>
        <span className="material-symbols-outlined">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E0E0E0"><path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>
        </span>
    </div>
    )


}
export default ScrollMe;