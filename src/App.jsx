import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";
import {PLACES} from './places'

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item className="accordion-item">
          <Accordion.Title id="experience" className="accordion-item-title">
            we got 20 years of experience
          </Accordion.Title>
          <Accordion.Content id="experience" className="accordion-item-content">
            <article>
              <p>You cannot go wrong with us,</p>
              <p>We are in the business of planning trips for 20 years</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordion-item">
            <Accordion.Title id="local-guides" className="accordion-item-title"> 
              we are working with local guides
            </Accordion.Title>
            <Accordion.Content id="local-guides" className="accordion-item-content">
              <article>
                <p>We are not doing this along fron our office</p>
                <p>We are working with lcal guides</p>
              </article>
            </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item}/>}
      </SearchableList>
    </section>
    <section>
      <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
        {(item) => item}
      </SearchableList>
    </section>
  </main>;
}

export default App;
