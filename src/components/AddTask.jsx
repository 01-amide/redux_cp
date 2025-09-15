import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    const trimmed = (description || "").trim();
    if (!trimmed) return;
    dispatch(addTask(trimmed));
    setDescription("");
  };
  return (
    <div className="input-row">
      <label htmlFor="new-task" className="sr-only">Add a task</label>
      <input
        id="new-task"
        type="text"
        className="input"
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
        aria-label="Task description"
      />
      <button className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
