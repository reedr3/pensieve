var MainHeader = React.createClass({
  render: function() {
    return (
      <header id="main-header">
        <div className="container">
          <img src="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728061_10156505665328998_5498779670418140584_n.jpg?oh=b2e71626e03fa2729df45e23efe13a76&oe=5A5DBBC9" alt="Pensieve Logo"></img>
          <p>Logged in as {this.props.user.email}</p>
          <div id="main-header-buttons">
            <a className="main-header-button button" href="/users/edit">Profile</a>
            <form accept-charset="UTF-8" action={"/users/sign_out"} method="post">
              <input name="_method" type="hidden" value="delete" />
              <input name="authenticity_token" type="hidden" value={this.props.authenticity_token} />
              <input type="submit" className="main-header-button button" value="Logout" />
            </form>
          </div>
        </div>
      </header>
    );
  }
});
