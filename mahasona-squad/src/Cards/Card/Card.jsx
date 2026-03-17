
import styles from './Card.module.css'
function Card({title,discription,scrollValue}){

    return(
        <div className={styles.cardContainer}>
            <span className={styles.cardText}>{title}</span>
            <hr className={styles.horLine}></hr>
            <p className={styles.discriptionPar}> 
                {discription}
            </p>
        </div>
        
    )
}

export default Card;