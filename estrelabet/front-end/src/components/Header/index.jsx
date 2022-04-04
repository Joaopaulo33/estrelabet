// import {logoImg} from '../../assets/logo.svg';
import styles from './styles.module.scss'
import icone from '../../assets/icone.png';



export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
             
            <span className={styles.div_logo}>
                <span><img src={icone} alt="star-group" /></span>
               <a href="/">
                    <h2> Grupo stars</h2>
               </a>
            </span> 
            
            </div>
        </header>
    )
}