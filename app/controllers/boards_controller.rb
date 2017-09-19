class BoardsController < ApplicationController
  def index
    @user = current_user
    @boards = Board.where(user_id: @user.id)
  end

  def show
    @user = current_user
    @board = Board.find(params[:id])
    if @board.user_id != @user.id
      redirect_to boards_path
    end
  end

  def new
    @user = current_user
    @board = Board.new
  end

  def create
    @user = current_user
    @board = Board.new(board_params)
    if @board.save
      redirect_to boards_path
    else
      redirect_to new_board_path
    end
  end

  def edit
    @user = current_user
    @board = Board.find(params[:id])
  end

  def update
    @user = current_user
    @board = Board.find(params[:id])
    if @board.update(name: params[:name], color: params[:color], user_id: params[:user_id])
      redirect_to board_path(@board)
    else
      redirect_to edit_board_path
    end
  end

  def destroy
    @user = current_user
    @board = Board.find(params[:id])

		@board.destroy
		redirect_to boards_path
  end


private

def board_params
  params.require(:board).permit(:name, :color, :user_id)
end

end
