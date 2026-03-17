import styles from './Content.module.css'
import Centerbrand from '../Centerbrand/Centerbrand';
import ScrollMe from '../ScrollMe/ScrollMe';
import { useRef , useEffect ,useState} from 'react';
import Cards from '../Cards/Cards';
function Content({sendScrollData}){

    const backgroundSection = useRef(null);
    const [scrollValue,setScrollValue] = useState(false);
    useEffect(()=>{
        const backgroundElement = backgroundSection.current;
        let count = 0
        const scrollDown = ()=>{
            setScrollValue(true);
            sendScrollData(true);//send value to parent
        }
        const scrollBack=()=>{
            setScrollValue(false);
            sendScrollData(false);
        }

        const countScroll = (Down)=>{
            // only activate if scroll count is higher than 3
            if(count< 3){
                count++;
            }
            else{
                if(Down){
                    scrollDown();
                }
                else{
                    scrollBack();
                }
            }
        }
        if(backgroundElement){
            backgroundElement.addEventListener('wheel',(e)=>{
                //the deltaY can check whether the user is scrolling up or down
                if(e.deltaY>0){
                    countScroll(true);//true if scrolling down
                }
                else if(e.deltaY<0){
                    countScroll(false);// false if scrolling up
                }
            }
            );
        }
        return()=>{
            if(backgroundElement){
                backgroundElement.removeEventListener('wheel',countScroll);
            }
        }
    }

    )

    return(
        <div 
            className={styles.mainContentArea}
            id="#mainContentArea" 
            ref={backgroundSection}>
            <Centerbrand scrollValue={scrollValue}/>  
            <ScrollMe scrollValue={scrollValue}/>
            <Cards scrollValue={scrollValue}/> 
        </div>
    )
}

export default Content;