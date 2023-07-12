import { Link } from "react-router-dom";

export default function NotFoundPage() {
   return (
      <div className="containerNotFound">
         <p className="NotFoundTitle">404</p>
         <p className="NotFoundDescription">
            Oups ! La page que vous demandez n'existe pas.
         </p>
         <Link to={`/`} className="NotFoundlink">
            Retourner sur la page d'accueil
         </Link>
      </div>
   );
}
