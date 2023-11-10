//reusable components, this can be also: function CoreConcept({image, title, description})
export default function Cards(props) {
    return (
      <li>
        <img src={props.image} alt="..." />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }
  