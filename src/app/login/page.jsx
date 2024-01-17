"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
 
const LoginPage = () => {
    // const router = useRouter();
    const [view, setView] = useState('signin');
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
    const [isSignInSuccess, setIsSignInSuccess] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
 
    const handleLogin = (username) => {
        setIsSignInSuccess(true);
        // Perform additional login logic, if needed
       // router.push('/');
    };
 
    const handleSignUp = () => {
        // Implement user registration logic (for demonstration, use local state)
        setIsSignUpSuccess(true);
        // Assuming a successful signup sets isSignUpSuccess to true
        handleLogin(formData.username);
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (view === 'signin') {
            // Assuming a successful login sets isSignInSuccess to true
            handleLogin(formData.username);
        } else if (view === 'signup') {
            // Validate form data and call handleSignUp
if (formData.username && formData.email && formData.password) {
                handleSignUp();
            } else {
                // Handle invalid form data
                console.error('Invalid form data');
            }
        }
    };
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
 
    return (
        <div className="login-container">
            
        <div>
            {isSignUpSuccess && <div className="toast">User registered successfully!</div>}
            {isSignInSuccess && <div className="toast">Signin successful! Redirecting to home page...</div>}
            <div className="form-wrapper">
                <div className='content-wrapper'>
            <form onSubmit={handleSubmit}>
                {view === 'signup' && (
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>

                   <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-button">
                    {view === 'signin' ? 'Sign In' : 'Sign Up'}
                </button>
                {view === 'signin' ? (
                    <p>
                        Don't have an account?{' '}
                        <button type="button" onClick={() => setView('signup')} className="link-button">
                            Sign Up
                        </button>
                    </p>
                ) : (
                    <p>
                        Already have an account?{' '}
                        <button type="button" onClick={() => setView('signin')} className="link-button">
                            Sign In
                        </button>
                    </p>
                )}
            </form>
            </div>
            </div>
            <style jsx>{`
           
                .login-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
 
                .form-wrapper {
                    max-width: 500px;
                    width: 100%;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    text-align: center;
                    margin-top: 109px;
                    margin-left:515px;
                }
               .content-wrapper{
                 text-align: left;
               }
                .form-group {
                    margin-bottom: 15px;
                }
 
                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
input {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
 
                .submit-button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                }
 
                .submit-button:hover {
                    background-color: #0056b3;
                }
.link-button {
                    background: none;
                    border: none;
                    color: #007bff;
                    cursor: pointer;
                    text-decoration: underline;
                }
 
                .toast {
                    position: fixed;
                    bottom: 10px;
                    right: 10px;
                    background-color: #4caf50;
                    color: white;
                    padding: 15px;
                    border-radius: 5px;
                    display: none;
                }
            `}</style>
            </div>
        </div>
    );
};
 
export default LoginPage;