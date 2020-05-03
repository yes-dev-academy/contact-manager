import React, {useState} from 'react'

const Login = () => {
    
    const[user,setUser] = useState({
        email:'',
        password:''
    });

    const onChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    const onSubmit = e =>{
      e.preventDefault();
      console.log('login submit')
    }

     const {email,password} = user
    return (
        <div className='flex-container'>
            <h1>
            Account<span className="parimary"> Login</span>
            </h1>

            <form onSubmit={onSubmit}>
            
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={onChange}/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={onChange}/>
            </div>
            
            <input type="submit" value="Login" className="btn btn-secondary btn-block"/>
            </form>
        </div>
    )
}

export default Login
