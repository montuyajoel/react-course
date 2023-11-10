export default function Topics({title, description, code }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
