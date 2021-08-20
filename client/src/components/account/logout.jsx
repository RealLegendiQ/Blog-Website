import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton =()=>{
    const {logout} = useAuth0();
    return(
        <button onClick={()=> logout()}
            style = {{
                background: 'unset',
                border: 'none',
                fontFamily: 'Roboto',
                fontSize: 17,
                cursor: 'pointer',
                opacity: 0.8
            }}
        >
            LOGOUT
        </button>
    )
}

export default LogOutButton;