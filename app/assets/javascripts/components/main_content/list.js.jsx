var List = React.createClass({
  getInitialState: function() {
    return {listEdit: false, modalDisplay: {display: "none"}};
  },

  showModal: function() {
    var newState = this.state;
    newState.modalDisplay = {display: "block"};
    this.setState(newState);
  },

  closeModal: function() {
    var newState = this.state;
    newState.modalDisplay = {display: "none"};
    this.setState(newState);
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
          <Dropdown path={"/boards/" + this.props.board.id + "/lists/" + this.props.listId} menuNoun="List" backgroundColor="#999" authenticityToken={this.props.authenticityToken}/>
        </div>

        <div className="cards">
          {this.cardsInThisList().map(function(card) {
            return <Card board={this.props.board} listId={this.props.listId} card={card} authenticityToken={this.props.authenticityToken}/>
          }.bind(this))}

          <div className="card card-create"> <div className="card-sub-header"> <LinkWithModal showModalCallback={this.showModal} linkWords="Create new card..." classes="card-create-link"/> </div> </div>

          <CardCreateModal
            modalDisplay={this.state.modalDisplay}
            closeModalCallback={this.closeModal}
            path={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/cards/"}
            authenticityToken={this.props.authenticityToken}
            board={this.props.board}
            listId={this.props.listId}
          />
        </div>

      </div>
    );
  }
});
