import { useState, useEffect } from 'react';

import styles from './Header.module.css'; 

export function Header() {

   function getTodayDateAmericanFormat() {
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Os meses começam de 0
      const day = String(today.getDate()).padStart(2, '0');
      const year = today.getFullYear();
      return `${month}/${day}/${year}`;
    }

   const formatarNumero = (numero) => {
      return numero.toLocaleString('en-US');
    };

    const [visualizacoesFalsas, setVisualizacoesFalsas] = useState(() => {
      return Number(sessionStorage.getItem('visualizacoesFalsas')) || 987684;
    });

  useEffect(() => {
   if(visualizacoesFalsas < 1905003) {
    const atualizarVisualizacoes = () => {
      const incremento = Math.floor(Math.random() * 15 + 1);
      
      setVisualizacoesFalsas(prevViews => {
         const newViews = prevViews + incremento;
         sessionStorage.setItem('visualizacoesFalsas', newViews);
         return newViews;
       });
    };

    const intervalId = setInterval(atualizarVisualizacoes, 3500);
    return () => clearInterval(intervalId);
   }
  }, []);
    
   return(
      <header className={styles.header}>

         <img src="https://res.cloudinary.com/dvmbmpthe/image/upload/v1714706570/photoprofile_j5mdbn.jpg" alt="photo" className={styles.logo}/>
         <div className={styles.infocontainer}>
            <div className={styles.infoitem}><strong>Dr. Roy Taylor</strong></div>
            <div className={styles.infoitem}>{getTodayDateAmericanFormat()}</div>
            <div className={styles.infoitem}>{formatarNumero(visualizacoesFalsas)} Views</div>
         </div>

      </header>
   ) 
}