var CardEditModal = React.createClass({
  render: function() {
    var easyChecked = false;
    var mediumChecked = false;
    var hardChecked = false;

    if(this.props.difficulty == "easy") {
      easyChecked = true;
    }
    else if(this.props.difficulty == "medium") {
      mediumChecked = true;
    }
    else if(this.props.difficulty == "hard") {
      hardChecked = true;
    }

    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <h1 className="modal-title">I'm a card editing modal!</h1>
        <form accept-charset="UTF-8" action={this.props.path} method="post">
          <input name="_method" type="hidden" value="put" />
          <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
          <input name="list_id" type="hidden" value={this.props.listId} />
          <input name="board_id" type="hidden" value={this.props.board.id} />
          <input name="name" type="text_field" defaultValue={this.props.card.name} autoFocus={true}/>

          <input type="radio" name="difficulty" id="difficultyEasy" value="easy" defaultChecked={easyChecked}/>
          <label for="difficultyEasy">Easy</label>
          <input type="radio" name="difficulty" id="difficultyMedium" value="medium" defaultChecked={mediumChecked}/>
          <label for="difficultyMedium">Medium</label>
          <input type="radio" name="difficulty" id="difficultyHard" value="hard" defaultChecked={hardChecked}/>
          <label for="difficultyHard">Hard</label>
        </form>
      </div>
    );
  }
});
