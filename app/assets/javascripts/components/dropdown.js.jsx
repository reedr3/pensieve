var Dropdown = React.createClass({
  getInitialState: function() {
    return {menuVisibility: "hidden"};
  },

  onClickAway: function() {
    var newState = this.state;
    newState.menuVisibility = "hidden";
    this.setState(newState);
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
    if(this.state.menuVisibility == "visible" && this.props.menuNoun == "Board") {
      menu = <div className="menu-content">
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
    }
    else if(this.state.menuVisibility == "visible" && this.props.menuNoun == "Card") {
      menu = <div className="menu-content">
                <ul>
                  <li>
                    <LinkWithModal showModalCallback={this.props.showModalCallback} linkWords ="Edit Card" classes="menu-item"/>
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
    }
    else if(this.state.menuVisibility == "visible" && this.props.menuNoun == "List") {
      menu = <div className="menu-content">
                <ul>
                  <li>
                    <form accept-charset="UTF-8" action={this.props.path} method="post">
                      <input name="_method" type="hidden" value="delete" />
                      <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
                      <input type="submit" className="menu-item" value={"Delete " + this.props.menuNoun} />
                    </form>
                  </li>
                </ul>
              </div>
    }
    else if(this.state.menuVisibility == "visible" && this.props.menuNoun == "Profile") {
      menu = <div className="menu-content">
                <ul>
                  <li>
                    <a href={this.props.path + "/edit"} className="menu-item">Edit {this.props.menuNoun}</a>
                  </li>
                  <li>
                    <form accept-charset="UTF-8" action={this.props.path + "/sign_out"} method="post">
                      <input name="_method" type="hidden" value="delete" />
                      <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
                      <input type="submit" className="menu-item" value={"Log Out"} />
                    </form>
                  </li>
                </ul>
              </div>
    }
    else {
      menu = "";
    }
    return (
      <div className="menu" style={{backgroundColor: this.props.backgroundColor}}>
        <a className="menu-icon" onClick = { this.onMenuClicked } style={{color: this.props.color}}>...</a>
        {menu}
      </div>
    );
  }
});
