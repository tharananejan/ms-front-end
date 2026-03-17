import Card from "./Card/Card";
import styles from './Cards.module.css';
import { useState,useEffect } from "react";
function Cards({scrollValue}){

    const discription1 = `
An engineering initiative to design and build a high-performance combat robot capable of both offensive power and defensive durability. The project integrates advanced mechanics and electronics to create a machine optimized for competitive arena battles.
    `
    const discription2 = `
MS 3D Printing delivers high-precision, custom 3D printed solutions to clients across the country. The business specializes in turning complex digital designs into high-quality physical prototypes and functional parts with island-wide delivery.
    `
    const discription3 = `
Mahasona Squad integrates cutting-edge AI solutions to optimize design workflows and enhance the precision of custom manufacturing. The company leverages intelligent automation to transform complex concepts into high-quality physical products with maximum efficiency.
    `
    const [scrolled,setScrollStyle] = useState(false);
    useEffect(()=>{
        if(scrollValue){
            setScrollStyle(true);
        }
        else{
            setScrollStyle(false);
        }
    },[scrollValue])

    return(
        <div className={[styles.cardsContainer,scrolled? styles.displayVer: styles.hiddenVer].join(' ')}>
            <Card title="BattleBots" discription={discription1}/>
            <Card title="3D Printing" discription={discription2}/>
            <Card title="AI Solutions" discription={discription3}/>
        </div>
    );
}

export default Cards;