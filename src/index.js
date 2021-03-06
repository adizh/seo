import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import './index.css'
import './media/media.css'
import store from './redux'
import {Provider} from 'react-redux'
ReactDOM.render(<Provider store={store}><Root/></Provider>,document.getElementById('root'));