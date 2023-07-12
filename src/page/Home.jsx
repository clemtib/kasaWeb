import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
   // const { onUpdateLogements } = props;
   const [logements, setLogements] = useState([]);

   useEffect(() => {
      fetch("/data/logements.json")
         .then((reponse) => reponse.json())
         .then((data) => {
            setLogements(data);
            // onUpdateLogements(data);
         });
      // }, [onUpdateLogements]);
   }, []);

   return (
      <>
         <div className="banner">
            <figure className="container">
               <img
                  src="/images/home.webp"
                  alt="presentation Home"
                  className="img-banner"
               />

               <figcaption className="title-banner">
                  <h1>Chez vous, partout et ailleurs</h1>
               </figcaption>
            </figure>
         </div>

         <div className="card-container">
            {logements.map((logement) => (
               <Link
                  key={logement.id}
                  to={`/housing/${logement.id}`}
                  state={{ logement }}
                  //l'objet logement est transmit en temps que propriété de l'objet "state" au composant de la page destination
                  //contient les details du logement selectioné
                  //la page de destination peut recupérer les données grace a la methode "location" de la bibliothèque react-router-dom
               >
                  <Card title={logement.title} cover={logement.cover} />
               </Link>
            ))}
         </div>
      </>
   );
}
