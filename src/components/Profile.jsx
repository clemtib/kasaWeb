import { useLocation } from "react-router-dom";

export default function Profile() {
   const { state } = useLocation();
   const host = state.logement.host;
   const nameWords = host.name.split(" "); // séparer les mots du nom
   return (
      <div className="profile-container">
         <h6 className="name">
            {nameWords[0]} <br />
            {nameWords[1]}
         </h6>
         <div className="img-profile">
            <img src={host.picture} alt="" />
         </div>
      </div>
   );
}
