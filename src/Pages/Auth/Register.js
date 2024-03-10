import React, { useState } from 'react';
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";
import "./css/util.css";
import "./css/main.css";
import logo from "../../images/footer_logo.png";
import { setAuthUser } from '../../Helper/Storage';
import { useNavigate } from 'react-router-dom';
import axios from'axios'
import Alert from 'react-bootstrap/Alert';

const Register = () => {
	const navigate = useNavigate();

    const [Register, setRegister] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        loading: false,
        err: []
    })
    const Do_Register=(e) =>{
        e.preventDefault();
        setRegister({...Register,loading:true,err:[]})
        axios.post("http://localhost:4004/register",{
            email: Register.email,password:Register.password,phone:Register.phone,name:Register.name,
        }).then(resp=>{
            setRegister({...Register,loading:false,err:[]})
            setAuthUser(resp.data);
            navigate("/Login");
        }).catch((errors)=>{
            setRegister({...Register,loading:false,err:[errors.response.data.msg]})
        });
        console.log(Register.err);
    }
 
    return (
        <div className="limiter">
			            {Register.err.map((error,index)=>(
            <Alert key={index} variant='success'>
            {error}
          </Alert>
    ))}
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">

					<span className="login100-form-title">
                    <img src={logo} alt="" className="img-fluid" style={{width: '200px', height: '200px'}}/>
                    </span>

					<div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="name" value={Register.name} onChange={(e)=>setRegister({...Register,name:e.target.value})}/>
						<span className="focus-input100" data-placeholder="الاسم"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="email" value={Register.email} onChange={(e)=>setRegister({...Register,email:e.target.value})}/>
						<span className="focus-input100" data-placeholder="ايميل الادمن الحالي"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="phonenumber" name="phone" value={Register.phone} onChange={(e)=>setRegister({...Register,phone:e.target.value})} />
						<span className="focus-input100" data-placeholder="رقم الموبايل"></span>
					</div>

					{/*
					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="email"/>
						<span className="focus-input100" data-placeholder="ايميل الادمن الجديد"></span>
					</div>
					*/}

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" name="pass" value={Register.password} onChange={(e)=>setRegister({...Register,password:e.target.value})}/>
						<span className="focus-input100" data-placeholder="كلمة المرور"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={Do_Register}>
								تسجيل
							</button>
						</div>
					</div>
                    <div className="text-center p-t-115">
						<span className="txt1">
هل  تريد تسجيل دخولك ؟						</span>
                        <br/>
						<a className="txt2" href="/login">
سجل دخولك الان						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    );
};

export default Register;