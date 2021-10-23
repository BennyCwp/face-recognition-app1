import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onRegisterName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onRegisterEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onRegisterPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onSubmitRegister = () => {
    fetch("https://still-citadel-18506.herokuapp.com/register/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="center-form br2 ba b--black-20 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Registration</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="name">
                  Name
                </label>
                <input
                  className="br1 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onRegisterName}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="br1 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onRegisterEmail}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f5" htmlFor="password">
                  Password
                </label>
                <input
                  className="br1 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onRegisterPassword}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("signin")}
                className="underline-hover i f4 link dim black db pointer"
              >
                Sign In
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
