import React from 'react'
import ReactDOM from 'react-dom';
import Root from './components/Root'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/index'
ReactDOM.render(<Provider store={store}>

<Root/>
</Provider>,document.getElementById('root'))