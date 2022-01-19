import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from './components/Header';
import MainSection from './components/MainSection';
import * as TodoActions from './actions';

const AppWraper = styled.div`
position: relative;
width: 100%;
max-width: 550px;
margin: 0 auto 40px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

const MainTitle = styled.h1`
font: 100px 'Helvetica Neue', Helvetica, Arial, sans-serif;
text-align: center;
font-weight: 100;
color: rgba(175, 47, 47, 0.15);
padding: 10px 0 5px;
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
      <MainTitle>
        todos
      </MainTitle>
      <AppWraper>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </AppWraper>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
