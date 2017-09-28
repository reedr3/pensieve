var LoginRegisterHeader = React.createClass({
  render: function() {
    return (
      <header id="login-register-header">
        <div className="container">
          <img src="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/22007520_10156579022983998_4159538439274514533_n.jpg?oh=d1195a772d61946195e4e4e2c30686cc&oe=5A4AD5E0" alt="Pensieve Logo"></img>
          <div id="login-register-header-buttons">
            <a className="login-register-button button" href="/users/sign_in">Log in</a>
            <a className="login-register-button button" href="/users/sign_up">Register</a>
          </div>
        </div>
      </header>
    );
  }
});
