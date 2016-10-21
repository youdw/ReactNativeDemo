export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';


export function login(data) {
    return (dispatch) => {
        console.log(data,"-----");
        if(data==1){
            dispatch(loginSuccess({mesg:'erroeeee'}));
        }else {
            dispatch(loginError({mesg:'error'}));
        }

    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        data: data,
    }
}

export function loginError(data) {
    return {
        type: LOGIN_ERROR,
        data: data,
    }
}