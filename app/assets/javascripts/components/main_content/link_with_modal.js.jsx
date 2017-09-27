var LinkWithModal = React.createClass({
  render: function() {
    return (
      <a className={this.props.classes} onClick={this.props.showModalCallback}> {this.props.linkWords} </a>
    );
  }
});
