import '../Login/Login.scss'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Validator from '../Validator'

function SignUp() {

    const [hidePassword, setHidePassword] = useState(true)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: '',
    })
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        Validator({
            form: '#user-login-form',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#user-fullName', 'Please fill your full name'),
                Validator.isRequired('#user-email', 'Please fill your email'),
                Validator.isEmail('#user-email', 'Please fill correctly email'),
                Validator.isRequired('#user-phone', 'Please enter your phone number'),
                Validator.isPhoneNumber('#user-phone', 'Please enter your phone number correctly'),
                Validator.isRequired('#user-password', 'Please fill your password'),
                Validator.minLength('#user-password', 8, 'Password must be at least 8 characters'),
                Validator.isPassword('#user-password', 'Please enter a password with at least 1 uppercase character, 1 special character and 1 number'),
                Validator.isRequired('#user-passwordConfirm', 'Please confirm your password'),
                Validator.isConfirm('#user-passwordConfirm', '#user-password', 'Please enter the correct password above')
            ],
            setIsSubmit
        });
    }, [formData])

    const handleChangPasswordType = () => {
        setHidePassword(!hidePassword)
    }

    const handleChangeValue = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const {passwordConfirm, ...payload} = formData 

        console.log(payload)
    }

    return (
        <div id="login-section" className="login">
            <div className="login-form">
                <form id="user-login-form" onSubmit={handleSubmit}>
                    <div className='user-header'>
                        <h1>Create an account!!!</h1>
                        <h2>Hello there, Let's start your journey with us.</h2>
                    </div>
                    <div className="login-main">
                        <div className="form-group">
                            <label htmlFor="user-fullName">Full name</label>
                            <input 
                                id="user-fullName" 
                                name="fullName" 
                                type="text" 
                                value={formData.name}
                                placeholder="Enter your full name ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-email">Email</label>
                            <input 
                                id="user-email" 
                                name="email" 
                                type="text" 
                                value={formData.email}
                                placeholder="Enter your email ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-phone">Phone number</label>
                            <input 
                                id="user-phone" 
                                name="phone" 
                                type="text" 
                                value={formData.phone}
                                placeholder="Enter your phone number ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-password">Password</label>
                            <input 
                                id="user-password" 
                                name="password" 
                                type={hidePassword ? "password" : "type"} 
                                value={formData.password}
                                placeholder="Enter your password ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                            {
                                hidePassword == false
                                &&
                                    <i className="ti-eye" style={{color: '#ccc'}} onClick={handleChangPasswordType}/>
                                ||
                                    <i className="ti-eye" style={{color: 'black'}} onClick={handleChangPasswordType}/>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-passwordConfirm">Password Confirmation</label>
                            <input 
                                id="user-passwordConfirm" 
                                name="passwordConfirm" 
                                type={hidePassword ? "password" : "type"} 
                                value={formData.passwordConfirm}
                                placeholder="Enter your password ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                            {
                                hidePassword == false
                                &&
                                    <i className="ti-eye" style={{color: '#ccc'}} onClick={handleChangPasswordType}/>
                                ||
                                    <i className="ti-eye" style={{color: 'black'}} onClick={handleChangPasswordType}/>
                            }
                        </div>
                    </div>
                    <button 
                        type="submit"
                        className={clsx({
                            active: isSubmit
                        })}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div type="submit" className="login-side"></div>
        </div>
    )
}

export default SignUp