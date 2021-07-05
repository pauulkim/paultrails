import React from "react";

// need to add errors underneath each input field
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formState;

    this.handleSubmit = this.handleSubmit.bind(this); // REVIEW - bind vs not needing to bind
  };

  update(input) {
    return (e) => {
      this.setState({ [input]: e.target.value })
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  };

  render() {
    const { errors, formType, formTitle, otherText, otherForm, processForm } = this.props;

    return (
      <div>
        <h2>{formTitle}</h2>
        <form onSubmit={this.handleSubmit}>
            {/* only display first name and last name fields on sign up */}
            {
              formType === "Sign Up" ? (
                <>
                  <label>
                    <input 
                      type="text"
                      placeholder="First name"
                      value={this.state.firstName}
                      onChange={this.update("firstName")}
                      required
                    />
                  </label>
                  <label>
                    <input 
                      type="text"
                      placeholder="Last name"
                      value={this.state.lastName}
                      onChange={this.update("lastName")}
                      required
                    />
                  </label>
                </>
              ) : ("")
            }

            <label>
              <input 
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
                required
              />
            </label>
            <label>
              <input 
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                required
              />
            </label>

            <button>{formType}</button>
        </form>
        <p>{errors}</p>
        <p>{otherText}</p>
        <p>{otherForm}</p>
      </div>
    )
  }
}


export default SessionForm;