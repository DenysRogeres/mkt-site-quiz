import styles from './Header.module.css'; 
import photo from '../assets/photoprofile.jpg'

export function Header() {
   return(
      <header className={styles.header}>

         <img src={photo} alt="photo" className={styles.logo}/>
         <div className={styles.infocontainer}>
            <div className={styles.infoitem}>Dr. Roy Taylor</div>
            <div className={styles.infoitem}>4/23/2024</div>
            <div className={styles.infoitem}>5,974,134 Views</div>
         </div>
         
      </header>
   ) 
}