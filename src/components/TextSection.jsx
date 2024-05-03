import styles from './TextSection.module.css';
import { Button } from './Button';

export function TextSection({ vagas }) { 
   return (
      <>
      <div className={`${styles.textsection} ${styles.text}`}>
         <div>
            <p>Have you ever imagined what your life would be like without that constant back pain that seems to suck all your energy and joy?</p>
            <p><strong>A life where getting out of bed in the morning is no longer a challenge, where playing with your grandchildren or enjoying a simple walk in the park is no longer a painful struggle.</strong></p>
            <p>Imagine for a moment, being able to walk, move and live free from the pain that has been your constant companion.</p>
         </div>
         <div className={styles.imgcontent}>
            <img src="https://res.cloudinary.com/dvmbmpthe/image/upload/v1714706561/glass-back-pain_eoelnz.png" alt="Back Pain" className={styles.img}/>
         </div>
      </div>

      <div className={styles.title}>
         <p>Today, You Have A Chance To Find That This Is Possible.</p>
      </div>

      <div className={`${styles.text} ${styles.textsecondsector}`}>
         <p>You&apos;ve been led to believe that back pain is an inevitable part of aging. They say it&apos;s because of natural wear and tear, your genetics, or even your weight.</p>

         <p>But what if there was something they didn&apos;t tell you?</p>

         <p>What if this solution was so powerful and capable of solving all your back or joint pain problems, that it had to be banned, because it made big industries lose money.</p>

         <p><strong>Click the button below</strong> and see how me and more than <strong>77,383 people</strong> had our lives transformed with this incredible <strong>*20-Second Rub Ritual*.</strong></p>
      
         <div className={styles.centerButton}>
            <span className={styles.space}>Spots Available To Attend Free Presentation: <strong><span className={styles.spots}>{vagas}</span></strong> spots.</span>
            <Button />
         </div>
      </div>

      </>
   )
}