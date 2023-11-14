import { Fragment } from "react"; //all things that start use are reacthooks
import { CORE_CONCEPTS} from "../../data/data";
import './CoreConcepts.css';
import ConceptDashboard from "./ConceptDashboardDashboard";
import ConceptExamples from "./ConceptExamples";

function CoreConcepts() {
  return (
    <Fragment>
    <ConceptDashboard data={CORE_CONCEPTS} />
    <ConceptExamples />
    </Fragment>
  );
}
/** other possible conditional statement {!selectedTopic ? <p>Please select a topic</p>: null} 
 * or {!selectedTopic && <p>Please select a topic.</p>}
 */

export default CoreConcepts;
