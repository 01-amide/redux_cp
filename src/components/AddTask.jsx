import { useState } from "react"; // local input state
import { useDispatch } from "react-redux"; // dispatch actions
import { addTask } from "../redux/taskSlice"; // action creator

const AddTask = () => { // input + add button
  const [description, setDescription] = useState(""); // controlled input value
  const dispatch = useDispatch();
  const handleAdd = () => { // guard empty, then dispatch
    const trimmed = (description || "").trim();
    if (!trimmed) return;
    dispatch(addTask(trimmed));
    setDescription(""); // reset
  };
  return (
    <div className="input-row"> {/* field + button */}
      <label htmlFor="new-task" className="sr-only">Add a task</label>
      <input
        id="new-task"
        type="text"
        className="input"
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }} // submit on Enter
        aria-label="Task description"
      />
      <button className="btn btn-primary" onClick={handleAdd}>Add</button> {/* primary action */}
    </div>
  );
};

export default AddTask;
