import React from 'react';

class Todo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			todos: [
				{
					todo: 'todo 1',
					completed: false
        },
        {
          todo: 'todo 2', 
          completed: false,
        },
        {
          todo: 'todo 3', 
          completed: false,
        }
			]
		};
	}

	render() {
    const todos = this.state.todos.map((todo) => (<li>{todo.todo}</li>))
		return (
			<div>
				<ul>
          {todos}
        </ul>
			</div>
		);
	}
}

export default Todo
