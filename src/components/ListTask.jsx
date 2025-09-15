import { useSelector } from "react-redux"; // read tasks from store
import Task from "./Task"; // single task row

const ListTask = () => { // renders list container
  const { list } = useSelector((state) => state.tasks); // tasks array

  return (
    <ul className="list">{/* semantic list */}
      {list.length > 0 && list.map((item) => (
        <li key={item.id}> {/* stable key */}
          <Task task={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListTask;
