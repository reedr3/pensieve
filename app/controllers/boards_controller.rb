class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def show
    @board = Board.find(params[:id])
    @lists = List.all
  end

  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      redirect_to boards_path
    else
      redirect_to new_board_path
    end
  end

  def edit
    @board = Board.find(params[:id])
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(name: params[:name], color: params[:color])
      redirect_to board_path(@board)
    else
      redirect_to edit_board_path
    end
  end

  def destroy
    @board = Board.find(params[:id])

		@board.destroy
		redirect_to boards_path
  end


private

def board_params
  params.require(:board).permit(:name, :color)
end

end
