import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const { list } = useSelector((state) => state.tasks);

  return (
    <ul className="list">
      {list.length > 0 && list.map((item) => (
        <li key={item.id}>
          <Task task={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListTask;
