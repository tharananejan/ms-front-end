import mahasonaSquadLogo from "../assets/msLightTransparentLogo.png"

import styles from "./Logo.module.css"
function Logo(){
    return(
        <>
        <img className={styles.brandLogo} src={mahasonaSquadLogo} alt="MahasonaSquad Logo" />
        </>
    )   
}
export default Logo;