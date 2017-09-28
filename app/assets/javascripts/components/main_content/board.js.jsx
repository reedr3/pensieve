// individual board display, with lists, each list having cards
var Board = React.createClass({
  getInitialState: function() {
    return {listCreate: false};
  },

  onListCreateClicked: function() {
    var newState = this.state;
    newState.listCreate = true;
    this.setState(newState);
  },

  onClickAway: function() {
    var newState = this.state;
    newState.listCreate = false;
    this.setState(newState);
  },

  render: function() {
    let listCreate;
    if(this.state.listCreate) {
      listCreate = <div className="list-create">
        <form accept-charset="UTF-8" action={"/boards/" + this.props.board.id + "/lists/"} method="post">
          <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
          <input name="board_id" type="hidden" value={this.props.board.id} />
          <input name="name" type="text_field" placeholder="new list name" autoFocus={true} onBlur={this.onClickAway}/>
        </form>
      </div>;
    }
    else {
      listCreate = <h1 onClick={this.onListCreateClicked}> Create new list </h1>;
    }

    return (
      <div className="board">

        <div className="board-sub-header">
          <h1>{this.props.board.name}</h1>
          <Dropdown path={"/boards/" + this.props.board.id} menuNoun="Board" backgroundColor="inherit" color="white" authenticityToken={this.props.authenticityToken}/>
        </div>

        <div className="lists">
          {this.props.lists.map(function(list) {
            return <List board={this.props.board} listName={list.name} listId={list.id} cards={this.props.cards} authenticityToken={this.props.authenticityToken}/>
          }.bind(this))}

          <div className="list"> <div className="list-sub-header"> {listCreate} </div> </div>
        </div>

      </div>
    );
  }
});
