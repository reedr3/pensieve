var Dropdown = React.createClass({
  getInitialState: function() {
    return {menuVisibility: "hidden"};
  },

  onMenuClicked: function() {
    var newState = this.state;
    if(this.state.menuVisibility == "hidden") {
      newState.menuVisibility = "visible";
    }
    else if(this.state.menuVisibility == "visible") {
      newState.menuVisibility = "hidden";
    }
    this.setState(newState);
  },

  render: function() {
    let menu;
    if(this.state.menuVisibility == "visible") {
      menu = <div>
                <ul>
                  <li>
                    <a href={this.props.path + "/edit"} className="menu-item">Edit {this.props.menuNoun}</a>
                  </li>
                  <li>
                    <form accept-charset="UTF-8" action={this.props.path} method="post">
                      <input name="_method" type="hidden" value="delete" />
                      <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
                      <input type="submit" className="menu-item" value={"Delete " + this.props.menuNoun} />
                    </form>
                  </li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div className="menu">
        <a className="menu-icon" onClick = { this.onMenuClicked }>...</a>
        {menu}
      </div>
    );
  }
});
