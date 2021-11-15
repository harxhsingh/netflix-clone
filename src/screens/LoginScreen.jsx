import React , {useState} from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    
    return (
        <div className= 'loginScreen'>
            <div className='loginScreen__background'>
                <img className='loginScreen__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={
                    ()=>setSignIn(true)
                }
                className='signIn__button'>Sign In</button>
                <div className='loginScreen__gradient'></div>
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignInScreen/>
                    ):(
                <>
                    <h2>Watch Anywhere | Cancel Anytime</h2>
                    <h1>Unlimited films, TV programmes and more</h1>
                    {/* <h3>Start your entertainment today</h3> */}
                    <div className="loginScreen__input">
                        <form>
                            <input type="email" placeholder='Email Address'/>
                            <button 
                        onClick={
                            ()=>setSignIn(true)
                        }
                        className='loginScreen__getStarted'>
                            GET STARTED
                        </button>
                        </form>
                    </div>
                </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen