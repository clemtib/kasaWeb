import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const getColorForRating = (rating) => {
   if (rating >= 1) return "on";
   return "off";
};

export default function Rating() {
   const { state } = useLocation();
   const rating = state?.logement?.rating || 0; //operateur de chainage optionel sert eviter les erreur si state ou logement est null ou undefined. Si l'un des deux est nul ou undefined alors l'operateur "ou" prend le relais et retourne 0 car la valeur est true

   return (
      <div className="stars">
         {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
               key={index}
               icon={faStar}
               size="lg"
               className={getColorForRating(index + 1 <= rating ? 1 : 0)}
            />
         ))}
      </div>
   );
}
