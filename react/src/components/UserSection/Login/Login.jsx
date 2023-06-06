import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AdministratorSectionContext } from "../../../context/AdministratorProvider"
import './Login.scss'
import Validator from "../Validator"
import clsx from 'clsx'

function Login() {

    const { slug } = useParams()
    const navigate = useNavigate()
    const { setAdminTheme } = useContext(AdministratorSectionContext)
    const [hidePassword, setHidePassword] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        if(slug!=undefined && slug!='admin')
            navigate('/')
        else 
            if(slug) setAdminTheme(slug)
            else setAdminTheme('')
    }, [])

    useEffect(() => {
        Validator({
            form: '#user-login-form',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#user-email', 'Please fill your email'),
                Validator.isEmail('#user-email', 'Please fill correctly email'),
                Validator.isRequired('#user-password', 'Please fill your password'),
                Validator.minLength('#user-password', 8, 'Password must be at least 8 characters'),
                Validator.isPassword('#user-password', 'Please enter a password with at least 1 uppercase character, 1 special character and 1 number')
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

        const payload = formData
        console.log(payload)
    }

    return (
        <div id="login-section" className="login">
            <div className="login-form">
                <form id="user-login-form" onSubmit={handleSubmit}>
                    <div className="user-header">
                        <h1>Nice to see you again!</h1>
                    </div>
                    <div className="login-main">
                        <div className="form-group">
                            <label htmlFor="user-email">Email</label>
                            <input 
                                id="user-email" 
                                name="email" 
                                type="text" 
                                value={formData.name}
                                placeholder="Enter your email ..."
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
            <div className="login-side"></div>
        </div>
    )
}

export default Login