import { useState } from "react";
import Topics from "./Topics";
import TabButton from "../Components/TabButton";
import { EXAMPLES } from "../../data/data";
import Section from "../Components/section";
import Tabs from "../Components/Tabs";
export default function ConceptExamples() {
  let topics = EXAMPLES;
  //const [counter, setCounter] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(); //this should be called at top level component, not inside another function

  function selectHandler(btnName) {
    setSelectedTopic(topics[btnName]);
  }

  return (
    <Section id="examples">
      <h2>Examples</h2>
      <Tabs
        ButtonsContainer={"menu"} //div, menu, section
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic?.title == "Components"}
              onSelect={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic?.title == "JSX"}
              onSelect={() => selectHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic?.title == "Props"}
              onSelect={() => selectHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic?.title == "State"}
              onSelect={() => selectHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      />
      <Section id="tab-content">
        {selectedTopic ? (
          <Topics
            title={selectedTopic.title}
            description={selectedTopic.description}
            code={selectedTopic.code}
          />
        ) : (
          <p>Select a topic.</p>
        )}
      </Section>
    </Section>
  );
}
