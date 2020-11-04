import React from "react";
import loginImg from "../../tdl_logo.png";
import './style.css';

function Login() {
  return (
    <div class="Background">
        <form class="form" id="login">
          <img src={loginImg} class="Image-3" />
          <div class="form__message form__message--error"></div>
          <div class="form__input-group">
            <label for="username" class="User-Name">
              User Name:
            </label>
            <input
              type="text"
              id="email"
              class="form__input"
              autoFocus
              placeholder="email@email.com"
            />
            <div class="form__input-error-message"></div>
          </div>
          <div class="form__input-group">
            <label for="password" class="Password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              class="form__input"
              autoFocus
              placeholder="*********"
              
            />
            <div class="form__input-error-message"></div>
          </div>
          <input type="checkbox" name="keepsignin" class="signchckbox" />
          <label for="signin" class="keepmesignedin">
            Keep me signed in
          </label>
          <p class="form__text">
            <a href="#" class="Forgot-password">
              Forgot password?
            </a>
          </p>
          <button class="form__button" type="button" >
            Sign In
          </button>
        </form>
           </div>
  );
}

export default Login;
