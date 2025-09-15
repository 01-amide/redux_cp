import "./App.css";
import AddTask from "./components/AddTask";
import { useSelector } from "react-redux";
import ListTask from "./components/ListTask";

function App() {
  const { list } = useSelector((state) => state.tasks);

  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <div className="app-brand">
            <span className="app-logo" aria-hidden="true"></span>
            <div>
              <h1 className="title">Tasks</h1>
              <p className="subtitle">{list.length} total {list.length === 1 ? "item" : "items"}</p>
            </div>
          </div>
        </div>

        <AddTask />

        <div className="mt-24">
          <ListTask />
        </div>
      </div>
    </div>
  );
}

export default App;
