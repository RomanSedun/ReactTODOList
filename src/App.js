import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import MainSection from './components/MainSection';
import * as TodoActions from './actions';

const AppWraper = styled.div`
width:100%;
padding: 2rem;
background: black;
`;

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

function App({ todos, actions }) {
  return (
    <>
      <AppWraper>
        <Header addTodo={actions.addTodo} />
      </AppWraper>
      <MainSection todos={todos} actions={actions} />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
