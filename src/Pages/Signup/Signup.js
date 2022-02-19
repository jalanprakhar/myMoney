import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';

//styles
import styles from './Signup.module.css'


export default function Signup() {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const {signup,isPending,error}=useSignup();
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(email,username,password);
    signup(email,password,username)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sign Up</h2>
      <label>
        <span>Username:</span>
        <input 
        type="text" 
        onChange={(e)=>{setUsername(e.target.value)}}
        value={username}
        required
        />
      </label>
      <label>
        <span>Email:</span>
        <input 
        type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email} 
        required
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
        type="password"
        autoComplete='on'
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password} 
        required
        />
      </label>
      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && <button className='btn' disabled>
        Loading
        </button>}
      {error && <p>{error}</p>}
    </form>
  )
}
