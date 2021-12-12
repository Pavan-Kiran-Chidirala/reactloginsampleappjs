// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isChecked: true}

  onChange = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {isChecked} = this.state
    return (
      <div className="container">
        <div className="inner-holder">
          <Message isChecked={isChecked} />
          {isChecked && <Login isChange={this.onChange} />}
          {!isChecked && <Logout isChange={this.onChange} />}
        </div>
      </div>
    )
  }
}
export default Home
