export default function Card(props) {
   return (
      <figure className="card">
         <img src={props.cover} alt={props.title} />
         <figcaption className="card-title">
            <h4>{props.title}</h4>
         </figcaption>
      </figure>
   );
}
