import { GET_INFO } from "../actions"


let initialState ={
    countrys : [],
    allcountrys : [],
    activity: [],
    allActivitys: []
}

const reducer = (state = initialState,action) =>{
    const { payload } = action;
    switch (action.type) {
        case GET_INFO:
            return{
                ...state,
                allcountrys: payload, 
                countrys:payload
            }
        default:
            return state
    }
}

export default reducer