import Logo from '../Logo/Logo.jsx'
import TopNavigation from '../TopNavigation/TopNavigation.jsx';

import styles from './Header.module.css'

function Header(){

    return(
        <div className={styles.headerContainer}>
            <Logo/> 
            <TopNavigation/>       
        </div>
    )
}
export default Header;