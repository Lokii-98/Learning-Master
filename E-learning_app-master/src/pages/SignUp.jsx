import React, { Component } from 'react';
import "./HomeStyles.css";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginForm: {
                userName: "",
                password: "",
                rememberMe: false
            }
        }
    }

    handlechange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ LoginForm: { [name]: value } })
        console.log(this.state.LoginForm.userName);
        this.validateField(name, value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        sessionStorage.setItem('userName', this.state.LoginForm.userName)

        console.log(this.state.LoginForm.userName, "2");

        this.login()
    }
    login = () => {
        console.log(this.state.LoginForm.userName, "3");

        this.setState({ login: true })

    }


    validateField = (name, value) => {
        switch (name) {
            case "userName":
                let name = /^[A-Za-z]{2,}[A-z]$/
                if (!value.match(name)) {
                    this.setState({ password: "enter proper name" })
                    this.setState({ rememberMe: true })
                }
                else {
                    this.setState({ password: "" })
                    this.setState({ rememberMe: false })


                } break;
        }

    }
    render() {
        if (this.state.login === true) {
            console.log(this.state.LoginForm.userName, "4");

            return <Redirect to="/login" />
        }
        else {
            return (
                <div className="container-fluid">
                    <div className="row ">
                        {/* <div className="jumbotron jumbotron-fluid col-md-4 offset-md-7"> */}
                        <form className="col-md-4 offset-md-7 form-content">
                            <div className="form-group">
                                <h3 className="text-center mt-3">Sign-Up</h3>
                            </div>
                            <hr />
                            <div className="form-row" >
                                <div className="col-md-6 form-group">
                                    <input type="text"
                                        name="firstName"
                                        // value={firstName}
                                        onChange={this.handlechange}
                                        className=" form-login form-control text-center"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="text"
                                        name="lastName"
                                        // value={firstName}
                                        onChange={this.handlechange}
                                        className="form-login form-control text-center"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    name="lastName"
                                    // value={firstName}
                                    onChange={this.handlechange}
                                    className="form-login form-control text-center"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    name="lastName"
                                    // value={firstName}
                                    onChange={this.handlechange}
                                    className="form-login form-control text-center"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="text-center">
                                <h6> Or Sign Up with</h6>
                            </div>
                            <hr />
                            <div className="form-row">
                                <div className="col-md-6 offset-md-3 form-group ">
                                    <button className="btn facebook-btn social-btn " type="button">
                                        <span className="text-white">
                                            <i className="fab fa-facebook-f text-white"></i> Sign in with Facebook
                                </span> </button>

                                    <button className="btn google-btn social-btn "
                                        type="button"><span><i className="fab fa-google-plus-g"></i>
                                            Sign in with Google+</span> </button></div>
                            </div>
                            <div className="d-flex justify-content-center" >
                                By clicking Sign-up You are indiacting that you have read and agree to the Terms and privacy policy
                            </div>
                            <div className="form-group offset-md-5 ">
                                <button type="submit" className="btn btn-primary btn-sm"> Sign-Up</button>
                            </div>
                            <div className="d-flex justify-content-center mb-3 ">
                                Have an account ?  <Link to="/login" onClick={this.handleSubmit}>   Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default Login;