var MainHeader = React.createClass({
  render: function() {
    return (
      <header id="main-header">
        <div className="container">
          <a href="/boards"> <img id="logo" src="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/22007520_10156579022983998_4159538439274514533_n.jpg?oh=d1195a772d61946195e4e4e2c30686cc&oe=5A4AD5E0" alt="Pensieve Logo"></img> </a>

          <Dropdown path={"/users"} menuNoun="Profile" backgroundColor="#222" color="white" authenticityToken={this.props.authenticity_token}/>

        </div>
      </header>
    );
  }
});
