import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import Footer from './Footer';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/TodoFilters';

const AllCheck = styled.input`
position: absolute;
top: 12px;
left: 4px;
width: 40px;
height: 40px;
padding: 7px 11px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
transform: rotate(90deg);
&:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
}

&:checked {
  &:before {
    color: #737373;
  }
}
`;

const FooterWrap = styled.div`
position: relative;
height: 41px;
color: #777;
padding: 10px 15px;
border-top: 1px solid #e6e6e6;
box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 
0 8px 0 -3px #f6f6f6, 
0 9px 1px -3px rgb(0 0 0 / 20%), 
0 16px 0 -6px #f6f6f6, 
0 17px 2px -6px rgb(0 0 0 / 20%);
text-align: center;

@media (max-width: 450px) {
  height: 75px;
}
`;

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
        <AllCheck
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
        <FooterWrap>
          <Footer
            completedCount={completedCount}
            activeCount={activeCount}
            filter={filter}
            onClearCompleted={handleClearCompleted}
            onShow={handleShow}
          />
        </FooterWrap>
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
    <>
      {renderToggleAll(completedCount)}
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} {...actions} />
        ))}
      </ul>
      {renderFooter(completedCount)}
    </>
  );
}

export default MainSection;
