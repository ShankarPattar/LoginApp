import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { modelReducer, formReducer } from 'react-redux-form';

import LoginForm from './components/dynamicForm/index';

const store = createStore(combineReducers({
    user: modelReducer('user'),
    userForm: formReducer('user')
}));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <LoginForm />
            </Provider>
        )
    }
}