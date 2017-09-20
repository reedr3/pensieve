var LoginRegisterHeader = React.createClass({
  render: function() {
    return (
      <header id="login-register-header">
        <div className="container">
          <img src="" alt="Pensieve Logo"></img>
          <a className="login-register-button" href="/users/sign_in">Login</a>
          <a className="login-register-button" href="/users/sign_up">Register</a>
        </div>
      </header>
    );
  }
});
