import Header from "./components/Headers/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
//reusable components, this can be also: function CoreConcept({image, title, description})

function App() {
  return (
    <div>
      <Header />
      <main>
      <CoreConcepts />
      </main>
    </div>
  );
}

export default App;
