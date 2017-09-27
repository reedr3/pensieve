var MainHeader = React.createClass({
  render: function() {
    return (
      <header id="main-header">
        <div className="container">
          <a href="/boards"> <img id="logo" src="https://scontent.fbed1-1.fna.fbcdn.net/v/t1.0-9/21728061_10156505665328998_5498779670418140584_n.jpg?oh=b2e71626e03fa2729df45e23efe13a76&oe=5A5DBBC9" alt="Pensieve Logo"></img> </a>

          <Dropdown path={"/users"} menuNoun="Profile" backgroundColor="#222" authenticityToken={this.props.authenticity_token}/>

        </div>
      </header>
    );
  }
});
