import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formState;
    
    this.handleSubmit = this.handleSubmit.bind(this); // REVIEW - bind vs not needing to bind
    this.demo = this.demo.bind(this);
  };

  demo(e) {
    e.preventDefault();
    const demoUser = { email: "demo@paultrails.com", password: "demopassword" };

    if (this.props.formType === "Sign Up") {
      this.props.login(demoUser);
    } else {
      this.props.processForm(demoUser);
    }
  }
  
  update(input) {
    return e => {
      this.setState({ [input]: e.target.value })
    }
  };
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  };
  
  // need to add errors underneath each input field
  render() {
    const { errors, formType, formTitle, otherText, otherForm } = this.props;

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
                      value={this.state.first_name}
                      onChange={this.update("first_name")}
                      required
                    />
                  </label>
                  <label>
                    <input 
                      type="text"
                      placeholder="Last name"
                      value={this.state.last_name}
                      onChange={this.update("last_name")}
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
        <p><button onClick={this.demo}>Demo User</button></p>
      </div>
    )
  }
}


export default SessionForm;