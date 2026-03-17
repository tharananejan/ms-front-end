import styles from './Centerbrand.module.css'
import { useState , useEffect } from 'react';
function Centerbrand({scrollValue}){
    const [scrolled,setScrollStyle] = useState(false);
    useEffect(()=>{
        if(scrollValue){
            setScrollStyle(true);
        }
        else{
            setScrollStyle(false);
        }
    },[scrollValue]

    )
    return(
        <span className={scrollValue? styles.largeMainTextVanish:styles.largeMainText}>Mahasona Squad</span>
    )
}
export default Centerbrand;