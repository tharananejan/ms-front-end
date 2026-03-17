import styles from './TopNavigation.module.css';


function TopNavigation(){
    return(
        <div className={styles.navBarSection}>
            <div className={styles.navBarElement}><span>Battle Bots</span></div>
            <div className={styles.navBarElement}><span>3D Printing</span></div>
            <div className={styles.navBarElement}><span>Team</span></div>
            <div className={styles.navBarElement}><span>Contact</span></div>
        </div>
    )
}
export default TopNavigation;