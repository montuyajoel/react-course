import Header from "./components/Headers/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import { Fragment } from "react";
//reusable components, this can be also: function CoreConcept({image, title, description})

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
      </main>
    </Fragment>
  );
}

export default App;
