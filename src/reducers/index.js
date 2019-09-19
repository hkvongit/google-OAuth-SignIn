import  {LOGIN,LOGOUT} from '../actions'

const initialState  ={
    LoginState : null
}

const LoginReducer = (state=initialState,action) =>{
    let newState = {...state.LoginState}
    switch(action.type){
        case LOGIN:
            newState = true
            return newState
        case LOGOUT:
            newState = false
            return newState
        default:
            return state
    }
}

export default LoginReducer