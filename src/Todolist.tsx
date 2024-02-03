export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: Function
}

const Todolist = (Props: PropsType) => {
	return (
		<div>
			<h3>{Props.title}</h3>
			<div>
				<input />
				<button>+</button>
			</div>
			<ul>
				{/* МАП - это метод массива который на основе элементов в массиве создает другой элемент  */}
				{Props.tasks.map(t => (
					<li>
						<input type='checkbox' checked={t.isDone} />
						<span>{t.title}</span>
						<button
							onClick={() => {
								Props.removeTask(t.id)
							}}
						>
							x
						</button>
					</li>
				))}
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	)
}

export default Todolist
