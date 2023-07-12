import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
export default function Carrousel({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const handleClickLeft = () => {
      if (currentIndex === 0) {
         setCurrentIndex(pictures.length - 1);
      } else {
         setCurrentIndex(currentIndex - 1);
      }
   };

   const handleClickRight = () => {
      if (currentIndex === pictures.length - 1) {
         setCurrentIndex(0);
      } else {
         setCurrentIndex(currentIndex + 1);
      }
   };

   if (pictures.length === 1) {
      return <img src={pictures[0]} alt="Deco interieur" />;
   }

   return (
      <div className="carousel">
         <img src={pictures[currentIndex]} alt="Deco interieur" />
         <div className="counter">
            <p>
               {currentIndex + 1}/{pictures.length}
            </p>
         </div>
         <div className="arrows">
            <div className="arrow arrow-left" onClick={handleClickLeft}>
               <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="3x"
                  color="#ff6060"
               />
            </div>
            <div className="arrow arrow-right" onClick={handleClickRight}>
               <FontAwesomeIcon
                  icon={faChevronRight}
                  size="3x"
                  color="#ff6060"
               />
            </div>
         </div>
      </div>
   );
}
