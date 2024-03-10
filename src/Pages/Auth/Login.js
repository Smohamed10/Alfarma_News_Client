import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAuthUser} from '../../Helper/Storage';

	//import icon from"./images/icons/favicon.ico";
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

const Login = () => {
	const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        loading: false,
        err: []
    });

    const navigate = useNavigate();

    const doLogin = (e) => {
        e.preventDefault();
        setLoginData({ ...loginData, loading: true, err: [] });
        axios.post("http://localhost:4004/login", {
            email: loginData.email,
            password: loginData.password,
        }).then(resp => {
            setLoginData({ ...loginData, loading: false, err: [] });
            setAuthUser (resp.data);       
			console.log(resp);
            navigate(`/`); 

        }).catch((errors) => {
            console.log(errors);
            setLoginData({ ...loginData, loading: false, err: [errors.response.data.msg] });
            console.log([errors.response.data.msg]);
        });
        console.log(loginData.err);
    };
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title">
                    <img src={logo} alt="" className="img-fluid" style={{width: '200px', height: '200px'}}/>
					</span>
					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}/>
						<span className="focus-input100" data-placeholder="البريد الالكتروني"></span>
					</div>


					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" name="pass" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}/>
						<span className="focus-input100" data-placeholder="كلمة المرور"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={doLogin}>
								دخول
							</button>
						</div>
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
ترغب بتسجيل ادمن اخر؟						</span>
                        <br/>
						<a className="txt2" href="/register">
سجل الان						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
    );
};

export default Login;