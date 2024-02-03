import './App.css'
import Todolist, { TaskType } from './Todolist'

function App() {
	let tasks: Array<TaskType> = [
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JavaScript', isDone: true },
		{ id: 3, title: 'ReactTypeScript', isDone: false },
	]

	function removeTask(id: number) {
		tasks = tasks.filter(t => t.id !== id)
	}

	return (
		<div className='App'>
			<Todolist title='What to learn?' tasks={tasks} removeTask={removeTask} />
		</div>
	)
}

export default App
