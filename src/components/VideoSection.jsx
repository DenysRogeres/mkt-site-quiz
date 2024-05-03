import styles from './VideoSection.module.css';

export function VideoSection({ vagas }) {
   return (
      <>
      <div className={styles.content}>
         <h1 className={styles.title}>A Once <span className={styles.mark}>Banned Back Pain</span> Fix From The 60’S Stuns Doctors</h1>
         
         <p className={styles.subtitle}>There are <strong className={styles.mark}>{vagas}</strong> places left for this <strong>FREE</strong> Presentation</p>
         <a href="https://hop.clickbank.net/?affiliate=denysroger&vendor=balmorex&pid=v4&tid=myhealthtoday" id="ps-click-vsl">
            <img id="ps-click-vsl" src="https://res.cloudinary.com/dvmbmpthe/image/upload/v1714702437/gif-balmorex-aprimorado_fjyit3.gif" alt="Video" className={styles.video}/>
         </a>
      </div>
      </>
   )
}