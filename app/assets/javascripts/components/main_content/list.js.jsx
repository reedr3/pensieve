var List = React.createClass({
  render: function() {
    return (
      <div className="list">
        <h1>{this.props.listName}</h1>

        <a href={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/edit"}>Edit List</a>
        <form accept-charset="UTF-8" action={"/boards/" + this.props.board.id + "/lists/" + this.props.listId} method="post">
          <input name="_method" type="hidden" value="delete" />
          <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
          <input type="submit" value="Delete List" />
        </form>
      </div>
    );
  }
});
