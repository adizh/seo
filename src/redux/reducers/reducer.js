import axios from  'axios'
const initialState={
    getSpeed:[]
}
const GET_SPEED='GET_SPEED'
export default(state=initialState,action)=>{
    switch(action.type){
        case GET_SPEED:{
            return{
                ...state,getSpeed:action.getSpeed
            }
        }
        default : return state
    } 
  
}
export const getSpeedData = (name) => {
    const API_KEY='AIzaSyD3KABCkXX3INWbQWspfP8aj48urCYs0BA'
    return (dispatch) => {
        axios(`
         https://www.googleapis.com/
         pagespeedonline/v5/runPagespeed?url=${name}/file/szMeBmoSdDOTsIpva6bIhT/GrowBe?node-id=1%3A2&key=${API_KEY}`)
            .then(({data}) => {
                dispatch({type: GET_SPEED, getSpeed: data})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
};
