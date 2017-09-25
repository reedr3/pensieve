var Card = React.createClass({
  render: function() {
    return (
      <div className="card">
        <p>{this.props.card.name}</p>
        <a href={"/boards/" + this.props.board.id + "/cards/" + this.props.card.id + "/edit"}>Edit Card</a>
        <form accept-charset="UTF-8" action={"/boards/" + this.props.board.id + "/cards/" + this.props.card.id} method="post">
          <input name="_method" type="hidden" value="delete" />
          <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
          <input type="submit" value="Delete Card" />
        </form>
      </div>
    );
  }
});
