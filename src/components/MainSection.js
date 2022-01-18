import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters';

function MainSection(props) {
  const [state, setState] = useState({ filter: SHOW_ALL });

  const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: (todo) => !todo.completed,
    [SHOW_COMPLETED]: (todo) => todo.completed,
  };

  const handleClearCompleted = () => {
    props.actions.clearCompleted();
  };

  const handleShow = (filter) => {
    setState({ filter });
  };

  function renderToggleAll(completedCount) {
    const { todos, actions } = props;
    if (todos.length > 0) {
      return (
        <input
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={actions.completeAll}
        />
      );
    }
  }

  function renderFooter(completedCount) {
    const { todos } = props;
    const { filter } = state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={handleClearCompleted}
          onShow={handleShow}
        />
      );
    }
  }

  const { todos, actions } = props;
  const { filter } = state;
  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
  const completedCount = todos.reduce(
     (count, todo) => todo.completed ? count + 1 : count,
    0
  );

  return (
    <div>
      {renderToggleAll(completedCount)}
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} {...actions} />
        ))}
      </ul>
      {renderFooter(completedCount)}
    </div>
  );
}

export default MainSection;
