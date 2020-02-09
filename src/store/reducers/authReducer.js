const initState = {
    authError:null,
    isAuthenticated:false
}

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'Login failed'
            }
        case 'LOGIN_SUCCESS' :
        console.log('login success');
        return {
            ...state,
            authError:null
        }

        case 'SIGNOUT_SUCCESS' :
        console.log('signout success');
        return {state,isAuthenticated:false}
        
        case 'SIGNUP_SUCCESS' :
        console.log('signup success');
        console.log(state)
        console.log(action)
        return {
            ...state,
            authError:null
            
        }
        case 'SIGNUP_ERROR':
        console.log ('signup error')
        return {
            ...state,
            authError: action.err.message
        }
    default:
        return state;
    }
} 

export default authReducer