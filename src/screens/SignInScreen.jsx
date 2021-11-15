import React, {useRef} from 'react'
import {auth} from './Firebase'
import './SignInScreen.css'

function SignInScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null);
    // const ref = useRef(initialValue);

    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    const signIn=(e)=>{
        e.preventDefault();
    }

    return (
        <div className='signInScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type="email" />
                <input ref={passwordRef} placeholder='Password' type="password" />
                <button type='submit'onClick={signIn}>Sign In</button>
                
                <h4>
                    <span className='color__ToText'>New to Netflix ? </span>
                    <span className='signUp__text' onClick={register}>Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen;














// import React, { useState , useRef} from "react";

// // firebase
// import { auth } from "./Firebase";

// // css
// import "./LoginScreen.css";

// const SignInScreen = () => {
// 	// const [email, setEmail] = useState("");
// 	// const [password, setPassword] = useState("");

//     const emailRef = useRef(null);
//     const passwordRef = useRef(null);

// 	const register = (e) => {
// 		e.preventDefault();
//         auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
//         .then((user) => {
//             alert("signup successful :) ");
//         })
//         .catch(error => alert(error.message));

//         // cleaning input box
//         emailRef.current.value("");
//         passwordRef.current.value("")
// 	};

// 	const signIn = (e) => {
// 		e.preventDefault();
// 		// auth
// 		// 	.createUserWithEmailAndPassword(email, password)
// 		// 	.then((user) => {
// 		// 		alert("signIn successful :) ");
// 		// 	})
// 		// 	.catch((error) => alert(error.message));

//             // setEmail("");
//             // setPassword("");

//         auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
//         .then((user) => alert("signIn successful :)"))
//         .catch(error => alert(error.message));
// 	};
// 	return (
// 		<div className="SignInScreen">
// 			<form>
// 				<h1>Sign In</h1>
// 				<input
// 					type="email"
// 					ref={emailRef}
// 					placeholder="Email"
// 				/>
// 				<input
// 					type="password"
// 					ref={passwordRef}
// 					placeholder="Password"
// 				/>
// 				<button type="submit" onClick={signIn}>
// 					Sign In
// 				</button>

// 				<h4>
// 					<span className="SignInScreen__grey">New to Netflix? </span>
// 					<span className="SignInScreen__link" onClick={register}>
// 						Sign Up now.{" "}
// 					</span>
// 				</h4>
// 			</form>
// 		</div>
// 	);
// };

// export default SignInScreen;