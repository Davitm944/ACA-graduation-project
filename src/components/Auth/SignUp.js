/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './Auth.css'
import { useHistory } from 'react-router'
import { SIGN_IN_ROUTE } from '../constants/constants'

export default function Auth(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props

  const history = useHistory()
  const onEmailType = (e) => {
    setEmail(e.target.value)
  }
  const onPasswordType = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <div class="bold-line"></div>
      <div class="container">
        <div class="window">
          <div class="overlay"></div>
          <div class="content">
            <div class="welcome">Welcome!</div>
            <div class="subtitle">
              We're almost done. Before using our services you need to create an
              account.
            </div>
            <div class="input-fields">
              <input
                type="email"
                placeholder="Email"
                class="input-line full-width"
                onChange={onEmailType}
              ></input>
              <span>{emailError}</span>
              <input
                type="password"
                placeholder="Password"
                class="input-line full-width"
                onChange={onPasswordType}
              ></input>
              <span>{passwordError}</span>
            </div>
            <div class="spacing" onClick={() => history.push(SIGN_IN_ROUTE)}>
              Already have account? <span class="highlight">Sign In</span>
            </div>
            <div onClick={handleSignup}>
              <button class="ghost-round full-width">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
