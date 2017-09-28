var CardCreateModal = React.createClass({
  render: function() {
    return (
      <div className="modal" style={this.props.modalDisplay}>
        <span className="close" onClick={this.props.closeModalCallback}>&times;</span>
        <h1 className="modal-title">New Task</h1>
        <div className="card-create-form-container">
          <form accept-charset="UTF-8" action={this.props.path} method="post">
            <input name="authenticity_token" type="hidden" value={this.props.authenticityToken} />
            <input name="list_id" type="hidden" value={this.props.listId} />
            <input name="board_id" type="hidden" value={this.props.board.id} />
            <input name="name" type="text_field" placeholder="new task details" autoFocus={true}/>

            <input type="radio" name="difficulty" id="difficultyEasy" value="easy" defaultChecked={true}/>
            <label for="difficultyEasy">Easy</label>
            <input type="radio" name="difficulty" id="difficultyMedium" value="medium"/>
            <label for="difficultyMedium">Medium</label>
            <input type="radio" name="difficulty" id="difficultyHard" value="hard"/>
            <label for="difficultyHard">Hard</label>
          </form>
        </div>
      </div>
    );
  }
});
