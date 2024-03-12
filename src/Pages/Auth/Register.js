import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
import { setAuthUser, getAuthUser } from '../../Helper/Storage';
import { Modal, Button } from 'react-bootstrap';

const Auth = getAuthUser();

const Register = () => {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        loading: false,
        err: []
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => setShowAlert(false);

    const Do_Register = (e) => {
        e.preventDefault();
        if (!Auth || Auth.length === 0) {
            // If Auth is undefined or empty, display an alert and prevent registration
            setRegister({
                ...register,
                loading: false,
                err: ["You must be an admin to perform registration."]
            });
            setShowAlert(true);
            return;
        }

        // Proceed with registration if Auth is not empty
        setRegister({ ...register, loading: true, err: [] });
        axios.post("http://localhost:4004/createadmin", {
            email: register.email,
            password: register.password,
            phone: register.phone,
            name: register.name,
        }, {
            headers: {
                token: Auth[0].token,
            },
        }).then(resp => {
            setRegister({ ...register, loading: false, err: [] });
            setAuthUser(resp.data);
            navigate("/");
        }).catch((errors) => {
            setRegister({ ...register, loading: false, err: [errors.response.data.msg] });
            setShowAlert(true);
        });
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">

                        <span className="login100-form-title">
                            <img src={logo} alt="" className="img-fluid" style={{ width: '200px', height: '200px' }}/>
                        </span>

                        {/* Alert Modal */}
                        <Modal show={showAlert} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Alert</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {register.err.map((error, index) => (
                                    <div key={index}>{error}</div>
                                ))}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="name" value={register.name} onChange={(e) => setRegister({...register, name: e.target.value})}/>
                            <span className="focus-input100" data-placeholder="الاسم"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                            <input className="input100" type="text" name="email" value={register.email} onChange={(e) => setRegister({...register, email: e.target.value})}/>
                            <span className="focus-input100" data-placeholder="ايميل الادمن الجديد"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="phonenumber" name="phone" value={register.phone} onChange={(e) => setRegister({...register, phone: e.target.value})} />
                            <span className="focus-input100" data-placeholder="رقم الموبايل"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <span className="btn-show-pass">
                                <i className="zmdi zmdi-eye"></i>
                            </span>
                            <input className="input100" type="password" name="pass" value={register.password} onChange={(e) => setRegister({...register, password: e.target.value})}/>
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
                                هل  تريد تسجيل دخولك ؟
                            </span>
                            <br/>
                            <a className="txt2" href="/login">
                                سجل دخولك الان
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
