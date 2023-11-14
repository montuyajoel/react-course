import Cards from "./Cards";

export default function ConceptDashboard({data}){
    return (<section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {data.map((x) => 
          <Cards key={x.title} {...x}
            // title={x.title}
            // description={x.description}
            // img={x.image}
            // key={x.key}
          />
        )
      }
    </ul>
   </section>)
  }