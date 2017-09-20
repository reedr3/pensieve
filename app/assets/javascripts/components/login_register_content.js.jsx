var LoginRegisterContent = React.createClass({
  render: function() {
    if(this.props.contentType == "login") {
      return (
        <main id="login-register-content">
          <div className="container">
            <div id="devise-login" className="devise">
              <h2>Log In</h2>
              <form accept-charset="UTF-8" action="/users/sign_in" method="post">
                <input name="authenticity_token" type="hidden" value={this.props.authenticity_token} />

                <label for="email">Email:</label>
                <input type="email" name="email" placeholder="Email" />

                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Password" />

                <input type="submit" value="Log In" />
              </form>
            </div>
          </div>
        </main>
      );
    }
    else {
      return (
        <main id="login-register-content">
          <div className="container">
            <div id="devise-register" className="devise">
              <h2>Sign up</h2>
              <form accept-charset="UTF-8" action="/users" method="post">
                <input name="authenticity_token" type="hidden" value={this.props.authenticity_token} />

                <label for="email">Email:</label>
                <input type="email" name="email" placeholder="Email" />

                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Password" />

                <label for="password_confirmation">Password Confirmation:</label>
                <input type="password" name="password_confirmation" placeholder="Password Confirmation" />

                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </main>
      );
    }
  }
});
