import { useState, useEffect } from 'react';
import { Header } from "../components/Header"
import { VideoSection } from "../components/VideoSection"
import { TextSection } from "../components/TextSection"
import { Footer } from "../components/Footer"
import { ClickMagickTracker } from '../components/ClickMagicTracker';

export function Balmorex() {

   const [number, setNumber] = useState(() => {
      return Number(sessionStorage.getItem('randomDecayNumber')) || 33;
    });

   const endTime = Date.now() + 45000; 
 
   useEffect(() => {
      const updateNumber = () => {
         setNumber(currentNumber => {
           const nextNumber = currentNumber > 3 ? currentNumber - 1 : 3;
   
           sessionStorage.setItem('randomDecayNumber', nextNumber);
   
           return nextNumber;
         });
      }

    let intervalId;

    const scheduleDecrement = () => {
      if (Date.now() < endTime) {
        const randomTime = Math.floor(Math.random() * 5000 + 1000); 
        intervalId = setTimeout(() => {
          updateNumber();
          scheduleDecrement();
        }, randomTime);
      } else {
        clearTimeout(intervalId);
      }
    };

    scheduleDecrement();

    return () => clearTimeout(intervalId); 
  }, []);
  

   return (
      <>
         <ClickMagickTracker />
         <Header />
         <VideoSection vagas={number}/>
         <TextSection vagas={number}/>
         <Footer />
      </>
   )
}