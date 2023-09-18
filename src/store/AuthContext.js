import React,{useState} from 'react';
const AuthContext = React.createContext({
token : '',
isLoggedIn : false,
login : (token )=>{},
logout : (token)=>{},
user : ''
});
export const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token');
    const initemail = localStorage.getItem('email');
    const [token,setToken] = useState(initialToken);
    const userisLoggedIn = !!token;
    const [email,setEmail] = useState(initemail);
    const loginHandler = (token,email) =>{
        localStorage.setItem('token',token);
        localStorage.setItem('email',email);
        setToken(token);
        setEmail(email);
    }
    const logoutHandler = ()=>{
        setToken(null);
        setEmail('');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }
    const contextValue = {
        token : token,
        isLoggedIn : userisLoggedIn,
        login : loginHandler,
        logout :logoutHandler,
        user : email
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;