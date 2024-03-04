import React from 'react';
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
const Register = () => {
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">

					<span className="login100-form-title">
                    <img src={logo} alt="" className="img-fluid" style={{width: '200px', height: '200px'}}/>
                    </span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input className="input100" type="text" name="email"/>
						<span className="focus-input100" data-placeholder="Email"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" name="pass"/>
						<span className="focus-input100" data-placeholder="Password"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								Register
							</button>
						</div>
					</div>
                    <div className="text-center p-t-115">
						<span className="txt1">
							Already have an account?
						</span>
                        <br/>
						<a className="txt2" href="/register">
							Log in
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    );
};

export default Register;