var List = React.createClass({
  isInList: function(card) {
    return card.list_id == this.props.listId;
  },

  cardsInThisList: function() {
    var totalBoardCards = this.props.cards;
    var cardsInThisList = totalBoardCards.filter(this.isInList);
    return cardsInThisList;
  },

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

        {this.cardsInThisList().map(function(card) {
          return <Card board={this.props.board} listId={this.props.listId} card={card} authenticityToken={this.props.authenticityToken}/>
        }.bind(this))}

        <div className="card"> <a href={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/cards/new"}> <p> Create new card </p> </a> </div>

      </div>
    );
  }
});
