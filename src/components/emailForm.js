import React from 'react'
import validator from 'email-validator'

const UNSUBMITTED = 'UNSUBMITTED'
const SUBMITTING = 'SUBMITTNG'
const SUBMITTED = 'SUBMITTED'

const ThankYouMessage = () => <div><p className="b f3 pb4">You're Amazing.</p></div>

export default class Form extends React.Component {
  state = {
    email: '',
    submittable: false,
    status: UNSUBMITTED,
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
    this.setState({
      status: SUBMITTING,
    })
    this.handleSuccess()
  }
  handleOnChange = e => {
    e.preventDefault()
    const newEmail = e.target.value
    const submittable = validator.validate('ianrtracey@gmail.com')
    this.setState({
      email: newEmail,
      submittable,
    })
  }
  handleSuccess = () => {
    this.setState({
      status: SUBMITTED,
    })
  }

  renderSubmitButton() {
    const { email, submittable, status } = this.state
    console.log({
      email,
      submittable,
    })
    const buttonClass = 'white sans-serif bg-black f6'
    const invalidButtonClass = 'white sans-serif bg-black f6 o-20'
    const enabled = submittable & (status !== SUBMITTING)
    return (
      <div class="mt2">
        <input
          className={`b ph3 pv2 input-reset white sans-serif ${
            enabled ? buttonClass : invalidButtonClass
          }`}
          type="submit"
          value="Keep me posted"
          disabled={!enabled}
        />
      </div>
    )
  }
  render() {
    const { status } = this.state

    if (status === SUBMITTED) {
      return <ThankYouMessage />
    }
    return (
      <form class="pv4 black-80" onSubmit={this.handleSubmit}>
        <div class="measure">
          <input
            id="name"
            class="input-reset ba pa2 bw1 mb db w-100"
            style={{ height: '48px' }}
            type="email"
            aria-describedby="name-desc"
            placeholder={'youareamazing@email.here'}
            onChange={this.handleOnChange}
          />
          {this.renderSubmitButton()}
          <small id="name-desc" class="f6 black-60 db mt2">
            (📬 we'll only send super important emails)
          </small>
        </div>
      </form>
    )
  }
}
