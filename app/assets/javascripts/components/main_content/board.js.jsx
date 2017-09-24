// individual board display, with lists, each list having cards
var Board = React.createClass({
  render: function() {
    return (
      <div>
        <a href="/boards">All Boards</a>
        <h1>{this.props.board.name}</h1>
        <p>{this.props.board.color}</p>
        <a href={"/boards/" + this.props.board.id + "/edit"}>Edit Board</a>
        <form accept-charset="UTF-8" action={"/boards/" + this.props.board.id} method="post">
          <input name="_method" type="hidden" value="delete" />
          <input name="authenticity_token" type="hidden" value={this.props.authenticity_token} />
          <input type="submit" value="Delete Board" />
        </form>
      </div>
    );
  }
});
