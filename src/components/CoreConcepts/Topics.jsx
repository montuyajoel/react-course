import { Fragment } from "react";
export default function Topics({title, description, code }) {
  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </Fragment>
  );
}
