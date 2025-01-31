import { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { GrGoogle } from 'react-icons/gr';
import { BsMicrosoft, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { FaFacebook } from 'react-icons/fa';

interface SignInData {
    email: string;
    password: string;
}

interface CompanyData {
    companyName: string;
}

interface DepartmentData {
    departmentName: string;
    company: {
        id: number;
    };
}

interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    department: {
        id: number;
    };
}

interface VerificationData{
    code:string;
}

const Auth = () => {
    const [activeLink, setActiveLink] = useState<string>('signin'); // default to 'signin'
    const navigate = useNavigate();
    const apiurl = import.meta.env.VITE_BACKEND_URL;

    const [signInData, setSignInData] = useState<SignInData>({
        email: "",
        password: ""
    });

    const [companyData, setCompanyData] = useState<CompanyData>({
        companyName: "",
    });

    const [departmentData, setDepartmentData] = useState<DepartmentData>({
        departmentName: "",
        company: {
            id: Number(sessionStorage.getItem("companyId"))
        }
    });

    const [signUpData, setSignUpData] = useState<SignUpData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        department: {
            id: Number(sessionStorage.getItem("departmentId"))
        }
    });

    const [verificationData, setVerificationData]=useState<VerificationData>({
        code:""
    });

    const signIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signInData)
        };
        fetch(`${apiurl}/open/api/auth/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSignInData({
                    email: "",
                    password: ""
                });
                navigate('/user');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const companyRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyData)
        };
        fetch(`${apiurl}/open/company`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCompanyData({
                    companyName: "",
                });
                sessionStorage.setItem('companyId', data.id);
                setActiveLink('department');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const departmentRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(departmentData)
        };
        fetch(`${apiurl}/open/departments`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDepartmentData({
                    departmentName: "",
                    company: {
                        id: Number(sessionStorage.getItem("companyId"))
                    }
                });
                sessionStorage.setItem('departmentId', data.id);
                setActiveLink('userRegister');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const verifyCode=(e:any)=>{
            e.preventDefault();
            const requestOptions={
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(verificationData)
            };
            fetch(`${apiurl}/open/api/auth/verify`, requestOptions)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                setVerificationData({
                    code:"",
                })
            })
            .catch(error=>{
                console.error('Error:', error);
            })
    };

    const userRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const departmentId = Number(sessionStorage.getItem("departmentId"));
        const requestData = {
            ...signUpData,
            department: {
                id: departmentId
            }
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        };
        fetch(`${apiurl}/open/api/auth/register`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSignUpData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    department: {
                        id: departmentId
                    }
                });
                setActiveLink('verify');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignInData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setCompanyData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setDepartmentData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setSignUpData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setVerificationData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    };

  
   

    const SigninForm = (
        <>
            <form className="signincontainer" onSubmit={signIn}>
                <span className="input_group">
                    <label htmlFor="signin-email">EMAIL</label>
                    <input type="email" name="email" id="signin-email" value={signInData.email} onChange={handleInputChange} required />
                </span>
                <span className="input_group">
                    <label htmlFor="signin-password">PASSWORD</label>
                    <input type="password" name="password" id="signin-password" value={signInData.password} onChange={handleInputChange} required />
                </span>
                <button type="submit">SIGN IN</button>
            </form>
            <section className='loginoptions'>
                <GrGoogle title='GOOGLE ACCOUNT' />
                <BsMicrosoft title='MICROSOFT ACCOUNT' />
                <LiaLinkedin title='LINKEDIN ACCOUNT' />
                <FaFacebook title='FACEBOOK ACCOUNT' />
                <BsTwitter title='TWITTER ACCOUNT' />
            </section>
            <span onClick={() => setActiveLink('forgot')} className='forgotpassword'>CLICK HERE TO RESET PASSWORD </span>
        </>
    );

    const SignupForm = (
        <form className="signupcontainer" onSubmit={userRegister}>
            <span className="input_group">
                <label htmlFor="signup-fname">FIRST NAME</label>
                <input type="text" name="firstName" id="signup-fname" value={signUpData.firstName} onChange={handleInputChange} required />
            </span>
            <span className="input_group">
                <label htmlFor="signup-lname">LAST NAME</label>
                <input type="text" name="lastName" id="signup-lname" value={signUpData.lastName} onChange={handleInputChange} required />
            </span>
            <span className="input_group">
                <label htmlFor="signup-email">EMAIL</label>
                <input type="email" name="email" id="signup-email" value={signUpData.email} onChange={handleInputChange} required />
            </span>
            <span className="input_group">
                <label htmlFor="signup-password">PASSWORD</label>
                <input type="password" name="password" id="signup-password" value={signUpData.password} onChange={handleInputChange} required />
            </span>
            <button type="submit">SIGN UP</button>
        </form>
    );

    const ForgotPasswordForm = (
        <form className="forgotpasswordcontainer">
            <span className="input_group">
                <label htmlFor="forgot-email">EMAIL</label>
                <input type="email" name="forgot-email" id="forgot-email" required />
            </span>
            <button type="submit">RESET PASSWORD</button>
        </form>
    );

    const departmentForm = (
        <form className="departmentForm" onSubmit={departmentRegister}>
            <span className="input_group">
                <label htmlFor="department-name">DEPARTMENT NAME</label>
                <input type="text" name="departmentName" id="department-name" value={departmentData.departmentName} onChange={handleInputChange} required />
            </span>
            <button type="submit">NEXT</button>
        </form>
    );

    const verifyForm = (
        <form className="verifyForm" onSubmit={verifyCode}>
            <span className="input_group">
                <label htmlFor="verify-code">VERIFICATION CODE</label>
                <input type="text" name="code" id="verify-code" value={verificationData.code} onChange={handleInputChange} required />
            </span>
            <button type="submit" onClick={() => setActiveLink('signin')}>NEXT</button>
        </form>
    );

    const companyRegisterForm = (
        <form className="companyregisterform" onSubmit={companyRegister}>
            <span className="input_group">
                <label htmlFor="company-name">COMPANY NAME</label>
                <input type="text" name="companyName" id="company-name" value={companyData.companyName} onChange={handleInputChange} required />
            </span>
            <button type="submit">NEXT</button>
        </form>
    );

    return (
        <div className="authcontainer">
            <header className="controls">
                <span className={activeLink === 'signin' ? 'active' : ''} onClick={() => setActiveLink('signin')}>SIGN IN</span>
                <span className={activeLink === 'signup' ? 'active' : ''} onClick={() => setActiveLink('signup')}>SIGN UP</span>
            </header>
            {activeLink === 'signin' && SigninForm}
            {activeLink === 'signup' && companyRegisterForm}
            {activeLink === 'forgot' && ForgotPasswordForm}
            {activeLink === 'department' && departmentForm}
            {activeLink === 'userRegister' && SignupForm}
            {activeLink === 'verify' && verifyForm}
        </div>
    );
};

export default Auth;
