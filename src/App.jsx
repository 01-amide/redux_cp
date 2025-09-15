import "./App.css"; // global styles + utility classes
import AddTask from "./components/AddTask"; // input + add button
import { useSelector } from "react-redux"; // access Redux state
import ListTask from "./components/ListTask"; // renders list of tasks

function App() { // root UI shell
  const { list } = useSelector((state) => state.tasks); // derive list length for header

  return (
    <div className="page"> {/* center content */}
      <div className="card"> {/* responsive card container */}
        <div className="card-header"> {/* app header */}
          <div className="app-brand">
            <span className="app-logo" aria-hidden="true"></span> {/* decorative */}
            <div>
              <h1 className="title">Tasks</h1>
              <p className="subtitle">{list.length} total {list.length === 1 ? "item" : "items"}</p> {/* live count */}
            </div>
          </div>
        </div>

        <AddTask /> {/* input row */}

        <div className="mt-24"> {/* task list */}
          <ListTask />
        </div>
      </div>
    </div>
  );
}

export default App;
