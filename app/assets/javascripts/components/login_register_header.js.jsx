var LoginRegisterHeader = React.createClass({
  render: function() {
    return (
      <header id="login-register-header">
        <div className="container">
          <img src="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728061_10156505665328998_5498779670418140584_n.jpg?oh=b2e71626e03fa2729df45e23efe13a76&oe=5A5DBBC9" alt="Pensieve Logo"></img>
          <div id="login-register-header-buttons">
            <a className="login-register-button button" href="/users/sign_in">Log in</a>
            <a className="login-register-button button" href="/users/sign_up">Register</a>
          </div>
        </div>
      </header>
    );
  }
});
