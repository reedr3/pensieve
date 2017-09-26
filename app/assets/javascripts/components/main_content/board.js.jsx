// individual board display, with lists, each list having cards
var Board = React.createClass({
  render: function() {
    return (
      <div className="board">

        <div className="board-sub-header">
          <h1>{this.props.board.name}</h1>
          <Dropdown path={"/boards/" + this.props.board.id} menuNoun="Board" authenticityToken={this.props.authenticityToken}/>
        </div>

        <div className="lists">
          {this.props.lists.map(function(list) {
            return <List board={this.props.board} listName={list.name} listId={list.id} cards={this.props.cards} authenticityToken={this.props.authenticityToken}/>
          }.bind(this))}

          <div className="list"> <a href={"/boards/" + this.props.board.id + "/lists/new"}> <p> Create new list </p> </a> </div>
        </div>

      </div>
    );
  }
});
