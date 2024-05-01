import styles from './Footer.module.css'
import { Link } from 'react-router-dom';


export function Footer() {
   return (
      <div className={styles.centerp}>
         <p><strong>Copyright 2024 by My Health Today. All rights reserved.</strong></p>
         <p>This site is not a part of the Youtube website or Youtube Inc. Additionally, This site is NOT endorsed by Youtube in any way. YOUTUBE is a trademark of YOUTUBE, Inc.</p>
         <p>This site is not a part of the Facebook website or Meta Inc. Additionally, This site is NOT endorsed by Faceook in any way. FACEBOOK is a trademark of META, Inc.</p>

         <p>​Disclaimer: Individual results may vary. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. Before taking any medications, over-the-counter drugs, supplements or herbs, consult a physician for a thorough evaluation. Testimonials are not claimed to represent typical results. All testimonials are real participants, and may not reflect the typical purchaser's experience, and are not intended to represent or guarantee that anyone will achieve the same or similar results.</p>

         <p>
            <Link to="/privacy" style={{ textDecoration: 'none', color: 'blue' }}>Privacy Policy</Link> |
            <Link to="/terms" style={{ textDecoration: 'none', color: 'blue' }}> Terms & Conditions</Link>
         </p>      
      </div>
   )
}