import { useDispatch } from "react-redux"; // dispatch actions
import { editTask, toggleTask } from "../redux/taskSlice"; // action creators
import { useState } from "react"; // local UI state

const Task = ({ task }) => { // single task row
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // edit mode toggle
  const [newDesc, setNewDesc] = useState(task.description); // buffer for edits
  const handleSave = () => { // persist edit, exit edit mode
    dispatch(
      editTask({
        id: task.id,
        desc: newDesc,
      })
    );
    setIsEditing(false);
  };
  return (
    <div className="item"> {/* container */}
      <input
        aria-label={task.isdone ? "Mark task as not completed" : "Mark task as completed"}
        className="checkbox"
        type="checkbox"
        checked={task.isdone}
        onChange={() => dispatch(toggleTask(task.id))} // toggle completion
      />
      <div className="item-content"> {/* text / editor */}
        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSave(); }} // save on Enter
            autoFocus
          />
        ) : (
          <p className={`item-text ${task.isdone ? "completed" : ""}`}>{task.description}</p> // strikethrough when completed
        )}
      </div>
      {isEditing ? (
        <button className="btn btn-primary" onClick={handleSave}>Save</button> // confirm edit
      ) : (
        <button className="btn btn-ghost" onClick={() => setIsEditing(true)}>Edit</button> // enter edit mode
      )}
    </div>
  );
};

export default Task;
