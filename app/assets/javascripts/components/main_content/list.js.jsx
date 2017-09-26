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

        <div className="list-sub-header">
          <h1>{this.props.listName}</h1>
          <Dropdown path={"/boards/" + this.props.board.id + "/lists/" + this.props.listId} menuNoun="List" authenticityToken={this.props.authenticityToken}/>
        </div>

        <div className="cards">
          {this.cardsInThisList().map(function(card) {
            return <Card board={this.props.board} listId={this.props.listId} card={card} authenticityToken={this.props.authenticityToken}/>
          }.bind(this))}

          <div className="card"> <a href={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/cards/new"}> <p> Create new card </p> </a> </div>
        </div>

      </div>
    );
  }
});
