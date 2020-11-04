import React from "react";
import loginImg from "../../tdl_logo.png";
import ReactDOM from "react-dom";
import history from '../../history';
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password=React.createRef();
    this.SignIn = this.SignIn.bind(this);
  }
  SignIn() {
    alert("Hi");
    var username = ReactDOM.findDOMNode(this.username.current).value;
    var password=ReactDOM.findDOMNode(this.password.current).value;
    if(username=="admin" && password=="admin"){
      history.push('/dashboard');
    }
    console.log(username+password);
  }
  render() {
    return (
      <div className="Background">
        <form className="form" id="login">
          <img src={loginImg} className="Image-3" />
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <label htmlFor="username" className="User-Name">
              User Name:
            </label>
            <input
              type="text"
              id="email"
              className="form__input"
              autoFocus
              placeholder="email@email.com"
              ref={this.username}
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <label htmlFor="password" className="Password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form__input"
              autoFocus
              placeholder="*********"
              ref={this.password}
            />
            <div className="form__input-error-message"></div>
          </div>
          <input type="checkbox" name="keepsignin" className="signchckbox" />
          <label htmlFor="signin" className="keepmesignedin">
            Keep me signed in
          </label>
          <p className="form__text">
            <a href="#" className="Forgot-password">
              Forgot password?
            </a>
          </p>
          <button className="form__button" type="button" onClick={this.SignIn}>
            Sign In
          </button>
        </form>
           </div>
    );
  }
}