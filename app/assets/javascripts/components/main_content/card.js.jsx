var Card = React.createClass({
  render: function() {
    return (
      <div className="card">

        <div className="card-sub-header">
          <p>{this.props.card.name}</p>
          <Dropdown path={"/boards/" + this.props.board.id + "/lists/" + this.props.listId + "/cards/" + this.props.card.id} menuNoun="Card" authenticityToken={this.props.authenticityToken}/>
        </div>

        <p>{this.props.card.difficulty}</p>

      </div>
    );
  }
});
