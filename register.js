import React,{useState} from "react";
import "./register.css";
const Register =() =>{
	const [data,setData]= useState(
		{
			firstname:'',
			lastname:'',
			email:'',
			password:'',
			confirmpassword:'',
		}
	)
	const {firstname,lastname,email,password,confirmpassword}=data;
	const changeHandler= e =>{
		setData({...data,[e.target.name]:[e.target.value]})
	}
	const submitHandler =e =>{
		e.preventDefault();
		console.log(data);
	}
	return (
		<div className="container">
			<h1 className="rr">Register Here</h1>
			<center>
				<form onSubmit={submitHandler}>
					<label>First name</label>
					<input type="text" name="firstname" value={firstname} onChange={changeHandler}/><br/>
					<label>Last name</label><br/>
					<input type="text" name="lastname" value={lastname} onChange={changeHandler}/><br/>
					<label>Email</label><br/>
					<input type="email"name="email" value={email} onChange={changeHandler}/><br/>
					<label>Password</label><br/>
					<input type="password"name="password" value={password} onChange={changeHandler}/><br/>
					<label>confirm password</label><br/>
					<input type="password"name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br/><br/>
					<input  className="btn" type="submit" name="submit" title="submit"/><br/>
				</form>
			</center>
		</div>
	)
}
export default Register;