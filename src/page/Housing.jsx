// import { useParams } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";
import Accordeon from "../components/Accordeon";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Profile from "../components/Profile";

export default function Housing() {
   const { state } = useLocation();

   const logement = state && state.logement; //attribue la valeur de "state.logement" à la variable "logement" uniquement si "state" et "state.logement" sont truthy

   if (!logement) {
      //verifie si logement est nul ou undefine
      return <Navigate to="/404" />;
   }

   return (
      <>
         <div className="carousel-container">
            <Carrousel pictures={logement.pictures} />
         </div>

         <div>
            <div className="infoContainer">
               <div className="wordItem">
                  <h2>{logement ? logement.title : "Logement introuvable"}</h2>
                  <h5>{logement.location} </h5>
                  <div className="tag-container">
                     {logement.tags.map((tags, index) => (
                        <div key={index} className="tag-item">
                           {tags}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="profileRating">
                  <Profile />
                  <Rating />
               </div>
            </div>
            <div className="accordeon-housing-container">
               <div className="accordeon-housing-item">
                  <Accordeon title="Description">
                     <p> {logement.description}</p>
                  </Accordeon>
               </div>
               <div className="accordeon-housing-item">
                  <Accordeon title="Equipement">
                     <ul>
                        {logement.equipments.map((equipments, index) => (
                           <li key={index}>{equipments} </li>
                        ))}
                     </ul>
                  </Accordeon>
               </div>
            </div>
         </div>
      </>
   );
}
