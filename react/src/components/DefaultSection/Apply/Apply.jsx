import { useEffect, useState } from 'react'
import './Apply.scss'
import clsx from 'clsx'
import Validator from '../../UserSection/Validator'

function Apply() {

    const [hidePassword, setHidePassword] = useState(true)
    const [formData, setFormData] = useState({
        fullName: 'name',
        email: 'mail',
        phone: 'phone',
        permanentAddress: 'per',
        temporaryAddress: 'tem',
        id: 'id',
        class: 'clas',
        major: 'maj',
        grade: 'gra',
        description: 'dhh',
        scoreFile: null,
        imageFile: null
    })

    console.log(formData)
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        Validator({
            form: '#apply-form',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                
            ],
            setIsSubmit
        });
    }, [formData])

    const handleChangPasswordType = () => {
        setHidePassword(!hidePassword)
    }

    const handleChangeValue = e => {
        // if(e.target.name == 'scoreFile') {
        //     const name = e.target.name
        //     const file = e.target.files[0]
        //     const reader = new FileReader()

        //     reader.onload = (e, name) => {
        //         const fileContents = e.target.result;
                
        //         setFormData({
        //             ...formData,
        //             [name]: fileContents
        //         })
        //     }

        //     reader.readAsText(file, name)
        // }

        if(e.target.name == 'scoreFile' || e.target.name == 'imageFile') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0]
            })

            console.log(e.target.files[0])
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const payload = formData
        console.log(payload)

        const data = new FormData()
        for (let key in formData) {
            if (formData.hasOwnProperty(key)) {
                data.append(key, formData[key]);
            }
        }

        console.log(data)
    }

    return(
        <div id="apply-section">
            <div className='apply wraper'>
                <h1>REGISTER TO PARTICIPATE IN THE KIS-GE INTERNSHIP PROJECT</h1>
                <h3>Let's join with us</h3>
                <form id="apply-form" onSubmit={handleSubmit}>
                    <div className="apply-main">
                        <div className="form-group">
                            <label htmlFor="user-fullName">Full name</label>
                            <input 
                                id="apply-name" 
                                name="fullName" 
                                type="text" 
                                value={formData.fullName}
                                placeholder="Enter your full name ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-email">Email</label>
                            <input 
                                id="apply-email" 
                                name="email" 
                                type="text" 
                                value={formData.email}
                                placeholder="Enter your email ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-phone">Phone number</label>
                            <input 
                                id="apply-phone" 
                                name="phone" 
                                type="text" 
                                value={formData.phone}
                                placeholder="Enter your phone number ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-id">Student ID</label>
                            <input 
                                id="apply-id" 
                                name="id" 
                                type="text" 
                                value={formData.id}
                                placeholder="Enter your student id ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-class">Class</label>
                            <input 
                                id="apply-class" 
                                name="class" 
                                type="text" 
                                value={formData.class}
                                placeholder="Enter your class name ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-grade">Grade</label>
                            <input 
                                id="apply-grade" 
                                name="grade" 
                                type="text" 
                                value={formData.grade}
                                placeholder="Enter your grade name ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-class">Major</label>
                            <input 
                                id="apply-major" 
                                name="major" 
                                type="text" 
                                value={formData.major}
                                placeholder="Enter your major ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-permanentAddress">Permanent address</label>
                            <input 
                                id="apply-permanentAddress" 
                                name="permanentAddress" 
                                type="text" 
                                value={formData.permanentAddress}
                                placeholder="Enter your permanent address ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-temporaryAddress">Temporary address</label>
                            <input 
                                id="apply-temporaryAddress" 
                                name="permanentAddress" 
                                type="text" 
                                value={formData.temporaryAddress}
                                placeholder="Enter your temporary address ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-description">Describe yourself</label>
                            <input 
                                id="apply-description" 
                                name="description" 
                                type="text" 
                                value={formData.description}
                                placeholder="Enter your description ..."
                                onChange={handleChangeValue}
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-score">Academic transcript (excel, pdf)</label>
                            <input 
                                id="apply-score" 
                                name="scoreFile" 
                                type="file" 
                                onChange={handleChangeValue}
                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .pdf"
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apply-image">Portrait Image</label>
                            <input 
                                id="apply-image" 
                                name="imageFile" 
                                type="file" 
                                onChange={handleChangeValue}
                                accept="image/*"
                            />
                            <span className="form-message"></span>
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
        </div>
    )
}

export default Apply