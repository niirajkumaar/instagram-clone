import './Login.css'
import socialDesktop from '../images/social-desktop.png'
const Login = () => {
    return (
        <div className="container login-container">
        
            <div className="row">
                <div className="col-md-7">
                    <img src={socialDesktop} />
                </div>
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title">Log In</h4>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Login;