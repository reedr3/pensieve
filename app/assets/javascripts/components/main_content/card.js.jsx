var Card = React.createClass({
  getInitialState: function() {
    return {modalDisplay: {display: "none"}};
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

  render: function() {
    var cardColor = "green";
    if(this.props.card.difficulty == "medium") {
      cardColor = "yellow";
    }
    else if(this.props.card.difficulty == "hard") {
      cardColor = "red";
    }
    else {
      cardColor = "green";
    }

    return (
      <div className="card" style={{borderBottom: "3px solid " + cardColor}}>

        <div className="card-sub-header">
          <p>{this.props.card.name}</p>
          <Dropdown path={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/cards/" + this.props.card.id} menuNoun="Card" backgroundColor="white" color="#999" showModalCallback={this.showModal} authenticityToken={this.props.authenticityToken}/>
        </div>


        <CardEditModal
          modalDisplay={this.state.modalDisplay}
          closeModalCallback={this.closeModal}
          path={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/cards/" + this.props.card.id}
          authenticityToken={this.props.authenticityToken}
          board={this.props.board}
          listId={this.props.listId}
          card={this.props.card}
          difficulty={this.props.card.difficulty}
        />


      </div>
    );
  }
});
