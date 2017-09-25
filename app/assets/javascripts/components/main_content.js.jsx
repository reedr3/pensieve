var MainContent = React.createClass({
  render: function() {
    if(this.props.page == "index") {
      return (
        <main id="main-content">
          <div className="container">
            <Boards boards={this.props.boards}/>
          </div>
        </main>
      );
    }
    else if(this.props.page == "show") {
      return (
        <main id="main-content">
          <div className="container">
            <Board board={this.props.board} user={this.props.user} lists={this.props.lists} cards={this.props.cards} authenticityToken={this.props.authenticity_token}/>
          </div>
        </main>
      );
    }
  }
});
