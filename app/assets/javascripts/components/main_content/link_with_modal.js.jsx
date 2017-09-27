var LinkWithModal = React.createClass({
  render: function() {
    return (
      <a className="link-with-modal menu-item" onClick={this.props.showModalCallback}> {this.props.linkWords} </a>
    );
  }
});
