// Write your code here
import './index.css'

const Login = props => {
  const {isChange} = props
  return (
    <button type="button" className="btn1" onClick={isChange}>
      Login
    </button>
  )
}
export default Login
