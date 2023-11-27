import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";

function App() {
  const [clickedTopics, setClickedTopic] = useState();

  const handleClick = (clickedButton) => {
    setClickedTopic(clickedButton);
  };

  let tabContent = <p>Please select a topic</p>;

  if (clickedTopics) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[clickedTopics].title}</h3>
        <p>{EXAMPLES[clickedTopics].description}</p>
        <pre>
          <code>{EXAMPLES[clickedTopics].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isClicked={clickedTopics === "components"}
              click={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isClicked={clickedTopics === "jsx"}
              click={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isClicked={clickedTopics === "props"}
              click={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isClicked={clickedTopics === "state"}
              click={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
