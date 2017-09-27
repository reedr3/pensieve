var List = React.createClass({
  getInitialState: function() {
    return {listEdit: false};
  },

  onListNameClicked: function() {
    var newState = this.state;
    newState.listEdit = true;
    this.setState(newState);
  },

  onClickAway: function() {
    var newState = this.state;
    newState.listEdit = false;
    this.setState(newState);
  },

  isInList: function(card) {
    return card.list_id == this.props.listId;
  },

  cardsInThisList: function() {
    var totalBoardCards = this.props.cards;
    var cardsInThisList = totalBoardCards.filter(this.isInList);
    return cardsInThisList;
  },

  render: function() {
    let listName;
    if(this.state.listEdit) {
      listName = <div className="list-name-edit">
        <form accept-charset="UTF-8" action={"/boards/" + this.props.board.id + "/lists/" + this.props.listId} method="post">
          <input name="_method" type="hidden" value="put" />
          <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
          <input name="board_id" type="hidden" value={this.props.board.id} />
          <input name="name" type="text_field" defaultValue={this.props.listName} autoFocus={true} onBlur={this.onClickAway}/>
        </form>
      </div>
    }
    else {
      listName = <h1 onClick = { this.onListNameClicked }>{this.props.listName}</h1>;
    }

    return (
      <div className="list">

        <div className="list-sub-header">
          {listName}
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
