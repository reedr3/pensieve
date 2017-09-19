// list of all boards as clickable links to their board pages
var Boards = React.createClass({
  render: function() {
    return (
      <div id="boards">
        {this.props.boards.map(function(board) {
          return <div className="board-in-index-view"> <a href={"/boards/" + board.id}> <p> {board.name} </p> </a> </div>
        }.bind(this))}
        <div className="board-in-index-view"> <a href="/boards/new"> <p> Create new board </p> </a> </div>
      </div>
    );
  }
});
