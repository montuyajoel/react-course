import { CORE_CONCEPTS, EXAMPLES } from "../../data/data";
import TabButton from "../Buttons/TabButton";
import './CoreConcepts.css';
import Topics from "./Topics";
import { useState } from "react"; //all things that start use are reacthooks
import Cards from "./Cards";

function CoreConcepts() {
  let topics = EXAMPLES
  //const [counter, setCounter] = useState(0);
  const [ selectedTopic, setSelectedTopic ]=useState(); //this should be called at top level component, not inside another function

  function selectHandler(btnName){
    setSelectedTopic(topics[btnName])
  }

  return (
    <div>
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((x) => 
            <Cards key={x.title} {...x}
              // title={x.title}
              // description={x.description}
              // img={x.image}
              // key={x.key}
            />
          )
        }
      </ul>
    </section>
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton isSelected={selectedTopic?.title=='Components'} onSelect={() => selectHandler('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic?.title=='JSX'} onSelect={() => selectHandler('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic?.title=='Props'}  onSelect={() => selectHandler('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic?.title=='State'}  onSelect={() => selectHandler('state')}>State</TabButton>
      </menu>
      <section id ="tab-content">
        { selectedTopic ?
          <Topics 
            title={selectedTopic.title}
            description={selectedTopic.description} 
            code={selectedTopic.code} 
          />
          : <p>Select a topic.</p>
        }
      </section>
    </section>
    </div>
  );
}

/** other possible conditional statement {!selectedTopic ? <p>Please select a topic</p>: null} 
 * or {!selectedTopic && <p>Please select a topic.</p>}
 */

export default CoreConcepts;
