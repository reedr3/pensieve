// individual board display, with lists, each list having cards
var Board = React.createClass({
  render: function() {
    return (
      <div className="board">
        <a href="/boards">All Boards</a>
        <h1>{this.props.board.name}</h1>
        <p>{this.props.board.color}</p>
        <a href={"/boards/" + this.props.board.id + "/edit"}>Edit Board</a>
        <form accept-charset="UTF-8" action={"/boards/" + this.props.board.id} method="post">
          <input name="_method" type="hidden" value="delete" />
          <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
          <input type="submit" value="Delete Board" />
        </form>


        {this.props.lists.map(function(list) {
          return <List board={this.props.board} listName={list.name} listId={list.id} authenticityToken={this.props.authenticityToken}/>
        }.bind(this))}

        <div className="list"> <a href={"/boards/" + this.props.board.id + "/lists/new"}> <p> Create new list </p> </a> </div>

      </div>
    );
  }
});
