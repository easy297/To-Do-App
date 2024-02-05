import { useState } from 'react'
import './App.css'
import Todolist, { TaskType } from './Todolist'
import { v1 } from 'uuid'

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
	let [tasks, setTasks] = useState([
		{ id: v1(), title: 'HTML&CSS', isDone: true },
		{ id: v1(), title: 'JavaScript', isDone: true },
		{ id: v1(), title: 'ReactJS', isDone: false },
		{ id: v1(), title: 'Redux', isDone: false },
		{ id: v1(), title: 'Rest API', isDone: false },
		{ id: v1(), title: 'GraphQL', isDone: false },
	])
	let [filter, setFilter] = useState<FilterValuesType>('all')

	function removeTask(id: string) {
		setTasks(tasks.filter(t => t.id !== id))
	}

	function changeFilter(value: FilterValuesType) {
		setFilter(value)
	}

	let tasksForTodoList = tasks
	if (filter == 'completed') {
		tasksForTodoList = tasks.filter(t => t.isDone === true)
	}
	if (filter == 'active') {
		tasksForTodoList = tasks.filter(t => t.isDone === false)
	}

	return (
		<div className='App'>
			<Todolist
				title='What to learn?'
				tasks={tasksForTodoList}
				removeTask={removeTask}
				changeFilter={changeFilter}
			/>
		</div>
	)
}

export default App
