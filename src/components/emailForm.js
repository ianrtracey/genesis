import React from 'react'
import validator from 'email-validator'

const UNSUBMITTED = 'UNSUBMITTED'
const SUBMITTING = 'SUBMITTNG'
const SUBMITTED = 'SUBMITTED'
const SUBMIT_FAILED = 'SUBMIT_FAILED'

const sendToAirTable = async (email) => {
  const response = await fetch(process.env.GATSBY_GENESIS_API, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "fields": {
        "Email": email,
      }
    })
  });
  console.log(response)
  if (response.status === 200) {
    return true;
  }
  return false;
}

const ThankYouMessage = () => <div><p className="b f3 pb4">You're Amazing.</p></div>

export default class Form extends React.Component {
  componentDidMount = () => {
  }
  state = {
    email: '',
    submittable: false,
    status: UNSUBMITTED,
  }

  sendData = async () => {
    const { email } = this.state;
    const success = await sendToAirTable(email)
    if (success) {
      this.handleSuccess()
    } else {
      this.handleFailure()
    }
    
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      status: SUBMITTING,
    })
    this.sendData()
  }
  handleOnChange = e => {
    e.preventDefault()
    const newEmail = e.target.value
    const submittable = validator.validate(newEmail)
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
  handleFailure = () => {
    this.setState({
      status: SUBMIT_FAILED,
    })
  }

  renderSubmitButton() {
    const { email, submittable, status } = this.state
    const buttonClass = 'white sans-serif bg-black f5'
    const invalidButtonClass = 'white sans-serif bg-black f5 o-20'
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
        {status === SUBMIT_FAILED ? (
          <small className="f5 red bold">This is embarrassing :/ Try again.</small>
        ): ( null )}
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
