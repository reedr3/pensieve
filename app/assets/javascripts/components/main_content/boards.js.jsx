// list of all boards as clickable links to their board pages
var Boards = React.createClass({
  render: function() {
    return (
      <div id="boards">
        {this.props.boards.map(function(board) {
          return <a href={"/boards/" + board.id}> <div className="board-in-index-view"> <p> {board.name} </p> </div> </a>
        }.bind(this))}
        <a href="/boards/new"> <div className="board-in-index-view"> <p> Create new board </p> </div> </a>
      </div>
    );
  }
});
