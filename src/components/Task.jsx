import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../redux/taskSlice";
import { useState } from "react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);
  const handleSave = () => {
    dispatch(
      editTask({
        id: task.id,
        desc: newDesc,
      })
    );
    setIsEditing(false);
  };
  return (
    <div className="item">
      <input
        aria-label={task.isdone ? "Mark task as not completed" : "Mark task as completed"}
        className="checkbox"
        type="checkbox"
        checked={task.isdone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <div className="item-content">
        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSave(); }}
            autoFocus
          />
        ) : (
          <p className={`item-text ${task.isdone ? "completed" : ""}`}>{task.description}</p>
        )}
      </div>
      {isEditing ? (
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
      ) : (
        <button className="btn btn-ghost" onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Task;
