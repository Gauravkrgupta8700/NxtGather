import React ,{useState}from 'react'
import './Css/LoginSignup.css'
const LoginSignUp = () => {
const [state, setState]=useState("Login");
const [formData, setFormData]= useState({
  username:"",
  password:"",
  email:""
})
const changeHandler=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const login =async()=>{
  console.log("Login Function Excuted", formData);
  try {
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.errors);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Network error: " + error.message);
  }
};
const signup = async () => {
  console.log("Signup Function Executed", formData);
  try {
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.errors);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Network error: " + error.message);
  }
};
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className='loginsignup-fields'>
              {state==="Sign Up" ? <input type='text' name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'/> : <></> }  
                <input type='email'name='email' value={formData.email} onChange={changeHandler}  placeholder='Email Address' />
                <input type='password' name='password' value={formData.password} onChange={changeHandler}  placeholder='Password' />
            </div>
            <button onClick={()=>{state==='Login'? login(): signup()}}>Continue</button>
            {state==='Sign Up' ? <p className='loginsignup-login'>Alerady have an account<span onClick={()=>{setState("Login")}}>Login Here</span></p>
             : <p className='loginsignup-login'>Create an Account?<span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
              <div className='loginsignup-agree'>
            <input type='checkbox' name=' ' id=' ' />
            <p> By continuing , i agree to the term of use & privacy policy</p>
            </div>
        </div>
      
    </div>
  )
}

export default LoginSignUp
