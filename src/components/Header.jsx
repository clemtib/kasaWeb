import { NavLink, Link } from "react-router-dom";

export default function Menu() {
   return (
      <header>
         <Link to={"/"}>
            <img
               src="/images/logo/kasa_red.svg"
               alt="logo Kasa"
               className="logo-header"
            />
         </Link>

         <nav>
            <ul>
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        isActive ? "active-link" : undefined
                     }
                  >
                     A Propos
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}
