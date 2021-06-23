import axios from 'axios';



const UPDATE_TODOS='UPDATE_TODOS';

const initialState = {
    todos: [],
    getSpeedData: {}
    
};
const func = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TODOS:
            return {...state, todos: [...state.todos, action.todo]};
        case 'IS_ACTIVE':
            return {
                ...state, todos: action.todos
            };
        case 'IS_DELETED':
            return {...state, todos: action.todos};
        case 'GET_SPEED' :{
                return {
                    ...state, getSpeedData: action.getSpeedData
                }
            }
        default:
            return state
    }
};
export default func;
export const updateTodos = (userValue,inputValue) => {
    return {
        type: UPDATE_TODOS, todo: {
            id: Math.random() * 1000,
            userName:userValue,
            todoName: inputValue,
            isActive: true,
            isDeleted:false
        }
    }
}
export const deletedTodo = (todo) => {
    return {
        type: 'IS_DELETED', todos: todo
    }
};



const API_KEY='f00881d88585865c3fb2a27151b436e6'
export const  getSpeedData =(url) => {
  
    return    (dispatch) => {      
     axios(`https://api.openweathermap.org/data/2.5/weather?q=${url}&appid=${API_KEY}`,
         {
            mode: 'no-cors' // 'cors' by default
          }
        ).then(({data}) => {
               dispatch({type: 'GET_SPEED', getSpeedData: data})
            console.log(data)
            })
            .catch((err)=>{            
                console.log(err)
            })
    }
}