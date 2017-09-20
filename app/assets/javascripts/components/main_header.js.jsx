var MainHeader = React.createClass({
  render: function() {
    return (
      <header id="main-header">
        <div className="container">
          <img src="" alt="Pensieve Logo"></img>
          <a className="main-header-button" href="/users/edit">Profile</a>
          <form accept-charset="UTF-8" action={"/sessions/" + this.props.user_id} method="post">
            <input name="_method" type="hidden" value="delete" />
            <input name="authenticity_token" type="hidden" value={this.props.authenticity_token} />
            <input type="submit" className="main-header-button" value="Logout" />
          </form>
        </div>
      </header>
    );
  }
});
