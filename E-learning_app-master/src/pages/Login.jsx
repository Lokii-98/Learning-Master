import React, { Component } from 'react';
import "./LoginStyle.css";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginForm: {
        userName: "",
        password: "",
        rememberMe: ""
      },
      errorFieldMessage: {
        userName: "",
        password: "",
        rememberMe: ""
      },
      status: {
        userName: '',
        password: '',
        rememberMe: '',
        buttonActive: ''
      },
      successMessage: "",
      errorMessage: "",
      homePage: "",
      loadSignup: '',
      userId: ""
    };
  }


  handleclick = () => {
    this.setState({
      loadSignup: true
    })
  }

  handleChange = (event) => {

    const target = event.target;

    const value = target.value;
    console.log(value, "2");

    const fieldName = target.name;
    console.log(fieldName, "3");

    const {LoginForm} = this.state;
    this.setState({
      LoginForm: {
        [fieldName]: value
      }
    });
    console.log(this.state.LoginForm.userName, "32", this.state.LoginForm.password);

    this.validateField(fieldName, value);
  }
  paste=(event) => {
    event.preventDefault()
  }
  handleKeyPress=(event) => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  }
  // login = () => {


  //     const { LoginForm } = this.state;

  //     axios.post("http://localhost:3000/login", LoginForm)
  //         .then(response => {
  //             let userId = response.data.userId;
  //             sessionStorage.setItem("password", response.data.password);
  //             sessionStorage.setItem("userId", userId);
  //             sessionStorage.setItem("userName", response.data.userName);
  //             this.setState({ homePage: true, userId: userId });
  //             window.location.reload();

  //         }).catch(error => {
  //             this.setState({ errorFieldMessage:error.response.data.message});
  //             sessionStorage.clear();
  //         })
  // }

  handleSubmit = (event) => {

    event.preventDefault();
    this.setState({
      loadSignup: true
    });
  // this.login();
  }

  validateField = (fieldName, value) => {

    let fieldValidationErrors = this.state.errorFieldMessage;
    let formValid = this.state.status;
    let passwordlength = /^.{7,20}$/
    let atlstonedigit = /[0-9]/
    let atlstonesml = /[a-z]/
    let splchtrs = /[@#$%^&*]/


    switch (fieldName) {

      case "userName":
        let name1 = /^[A-Za-z]{2,}[A-z]$/

        if (!value || value === "") {
          fieldValidationErrors.userName = "Please enter user name";
          formValid.userName = false;
        } else if (!value.match(name1)) {
          fieldValidationErrors.userName = "User Name dosen't exist";
          formValid.userName = false;
        } else {
          fieldValidationErrors.userName = "";
          formValid.userName = true;
        }
        break;

      case "password":

        if (!value || value === "") {

          fieldValidationErrors.password = "Password is mandatory";
          formValid.password = false;

        } else if (!(value.match(passwordlength)) || !(value.match(atlstonedigit)) || !(value.match(atlstonesml)) || !(value.match(splchtrs))) {
          fieldValidationErrors.password = "Please Enter a valid password"
          formValid.password = false;


        } else {
          fieldValidationErrors.password = " ";
          formValid.password = true;
        }
        break;
      default:
        break;
    }
    formValid.buttonActive = formValid.userName && formValid.password;
    this.setState({
      errorFieldMessage: fieldValidationErrors,
      status: formValid,
      successMessage: "",
      errorMessage: ""
    });
  }


  render() {
    if (this.state.homePage === true) {

      return (<Redirect to={'/home' + this.state.userId} />)
    } else if (this.state.loadSignup === true) {

      return <Redirect to={'/signup'} />
    } else {
      return (
        //   <div>
        //     <div id="loginpage" classNameName="col-md-6 offset-md-8 ">
        //         <div classNameName="d-flex ">
        //             <div classNameName="form-row justify-content-center">
        //                 <div>
        //                     <h3>LOGIN</h3>
        //                 </div>
        //                     <div classNameName="form-group ">
        //                         <label htmlFor="userName" id="userName" />
        //                         <input type="text"
        //                         placeholder="User name "
        //                         classNameName="form-control form-login" />
        //                     </div>
        //                     <div classNameName="form-group">
        //                         <label htmlFor="password" id="password" />
        //                         <input type="password"
        //                         placeholder="password"
        //                         classNameName="form-control form-login" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        <div className="container-fluid background-image">
<div className="d-flex justify-content-end h-100">
<div className="card">
<div className="card-header ">
<h3 className="text-center">Sign In</h3>
{ /* <div className="d-flex justify-content-end social_icon">
<span><i className="fab fa-facebook-square"></i></span>
<span><i className="fab fa-google-plus-square"></i></span>
<span><i className="fab fa-twitter-square"></i></span>
</div> */ }
</div>
<div className="card-body d-flex">
    <form onSubmit={this.handleSubmit}>
<div className="input-group form-group">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fas fa-user"></i></span>
</div>
           <input
        type="text"
        value={this.state.LoginForm.userName}
        onChange={this.handleChange}
        id="userName"
        name="userName"
        className=" form-control text-center"
        placeholder="User Name" />
</div>
                    {this.state.errorFieldMessage.userName ? (<span className="text-danger">
                                        {this.state.errorFieldMessage.userName}
                                    </span>)
          : null}
<div className="input-group form-group">
<div className="input-group-prepend">
<span className="input-group-text"><i className="fas fa-key"></i></span>
</div>
<input
        type="password"
        value={this.state.LoginForm.password}
        onChange={this.handleChange}
        id="password"
        name="password"
        className="form-control"
        placeholder="password" />
</div>
                    {this.state.errorFieldMessage.password ? (<span className="text-danger">
                                        {this.state.errorFieldMessage.password}
                                    </span>)
          : null}
<div className="row align-items-center remember">
<input type="checkbox" value="yes"/>Remember Me
</div>
<div className="form-group">
<button type="submit" className="btn btn-primary offset-md-9">LogIn</ button>
</div>
</form>
</div>
<div className="card-footer">
<div className="d-flex justify-content-center links">
Don't have an account?<Link  to="/signup"onClick={this.handleSubmit}>Sign Up</Link>
</div>
<div className="d-flex justify-content-center">
<a href="#">Forgot your password?</a>
</div>
</div>
</div>
</div>
</div>
        );
    }
  }
}

export default Login;
