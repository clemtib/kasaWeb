import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Accordeon(props) {
   const [icon, setIcon] = useState(faChevronDown);
   const [isExpanded, setIsExpended] = useState(false);

   function handleClick() {
      icon === faChevronDown ? setIcon(faChevronUp) : setIcon(faChevronDown);
      setIsExpended(!isExpanded);
   }
   return (
      <div className="accordeon-expanded">
         <div className="accordeon-item" onClick={handleClick}>
            <h3>{props.title}</h3>
            <FontAwesomeIcon icon={icon} size="xl" color="white" />
         </div>
         {isExpanded && (
            <div className="containerExpanded">{props.children}</div>
         )}
      </div>
   );
}
