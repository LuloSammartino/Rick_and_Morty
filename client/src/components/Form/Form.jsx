import { validarMail, validarPassword } from "./validation"
import style from "./Form.module.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Form({login}) {

const [showPassword, setShowPassword] = useState(false)
const [userData, setUserData] = useState({email: '', password: ''})
const [errors, setErrors] = useState({email:false , password:false, log:false})

const handleChange = (e) => {
    if(e.target.name === 'email'){
        setUserData({...userData, email: e.target.value})

        if(e.target.value.length >= 8 )validarMail(e.target.value) ? setErrors({...errors, email: false}) : setErrors({...errors, email: true}) 
        else  setErrors({...errors, email: false})   
    } 
    if(e.target.name === 'password'){
        setUserData({...userData, password: e.target.value})
        validarPassword(e.target.value)? setErrors({...errors, password: false}) : setErrors({...errors, password: true})  
    }
}

let location = useLocation().pathname


const handleSubmit = (e) => {
  e.preventDefault()
  login(userData)
  if(location === '/'){
    setErrors({...errors, log:true})
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return ( 
<div className={style.loginbox}>
  <form>
    <div className={style.userbox}>
      <input type="text" name="email" onChange={(e) => {handleChange(e)}}/>
      <label>Email</label>
      {errors.email && <p className={style.errmail}>Ingrese un email valido</p>}
    </div>

    <div className={style.userbox}>
    
    <button type='button' onClick={() => !showPassword?setShowPassword(true):setShowPassword(false)
    } className={style.ojo}>ojo</button>
      <input  type={showPassword ? "text" : 'password'} name="password" onChange={(e) => {handleChange(e)}} />
      <label>Password</label>
      {errors.password && <p className={style.errpass}>Constraseña invalida</p>}
    </div>
    <center>
      {errors.log && <p className={style.errlog}>Credenciales invalidas</p>}
    <a onClick={(e) => handleSubmit(e)}>
           SUBMIT
       <span></span>
    </a></center>
  </form>
</div>
    )
}