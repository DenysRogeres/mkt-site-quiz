import styles from './VideoSection.module.css';
import videoGif from '../assets/gif-balmorex-aprimorado.gif'

export function VideoSection() {
   return (
      <>
      <div className={styles.content}>
         <h1 className={styles.title}>A Once <span className={styles.mark}>Banned Back Pain</span> Fix From The 60’S Stuns Doctors</h1>
         
         <p className={styles.subtitle}>There are <strong className={styles.mark}>3</strong> places left for this <strong>FREE</strong> Presentation</p>
         <a href="https://hop.clickbank.net/?affiliate=denysroger&vendor=balmorex&pid=v4&tid=myhealthtoday">
            <img src={videoGif} alt="Video" className={styles.video}/>
         </a>
      </div>
      </>
   )
}