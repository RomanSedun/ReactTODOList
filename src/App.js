import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './components/Header';
import MainSection from './components/MainSection';
import * as TodoActions from './actions';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const App = ({ todos, actions }) => {

  return (
    <>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);