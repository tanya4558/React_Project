import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';


import { useState } from "react";
import { UserDetails } from '@/data/UserDetails';

const LoginModal = (props) => { 

   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
  });

  const handleLogin = (userData) => {
   props.setLoggedIn(true);
   props.setuserData(userData);
   props.handleModalOpen();
   };

  const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({ ...prevData, [name]: value }));
};
const handleSubmit = (e) => {
   e.preventDefault();
       // Handle form submission logic here
       // Assuming a successful login sets isSignInSuccess to true
       var userData = new UserDetails();
       userData.email = formData.email;
       userData.userName = "XYZ";
       userData.modelNames = ["A", "B"];
       handleLogin(userData);
};
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={handleSubmit}>
              <div className="form-group">
						<label htmlFor="email">Email:</label>
					    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
					</div>
					<button type="submit" className="submit-button">
						{'Sign In'}
					</button>
               <br/>
               <button variant="danger" onClick={props.handleModalOpen} className="cancel-button">
						{'Cancel'}
					</button>
               </form>
			  </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
          </Modal>
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
                .cancel-button {
                  width: 100%;
                  padding: 10px;
                  margin-top: 10px;
                  background-color: #777777;
                  color: #fff;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  font-size: 16px;
              } 
              .cancel-button:hover {
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
        </>
     );
}

export default LoginModal;

