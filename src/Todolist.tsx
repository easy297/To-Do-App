type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>
}


const Todolist = (Props: PropsType) => {
  return (
    <div>
      <h3>{Props.title}</h3>
      <ul>
        <li>
          <input type="checkbox" checked={Props.tasks[0].isDone} />
          <span>{Props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={Props.tasks[1].isDone} />
          <span>{Props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={Props.tasks[2].isDone} />
          <span>{Props.tasks[2].title}</span>
        </li>
      </ul>
    </div>
  );
};

export default Todolist;
