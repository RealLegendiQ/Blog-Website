import { useAuth0 } from "@auth0/auth0-react";
const LoginButton =()=>{
    const {loginWithRedirect} = useAuth0();
    return(
        <button onClick={()=> loginWithRedirect()}
            style = {{
                background: 'unset',
                border: 'none',
                fontFamily: 'Roboto',
                fontSize: 17,
                cursor: 'pointer',
                opacity: 0.8
            }}
        >
            LOGIN
        </button>
    )
}

export default LoginButton;