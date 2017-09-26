class ListsController < ApplicationController
  def new
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.new
  end

  def create
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.new(list_params)
    if @list.save
      redirect_to board_path(@board)
    else
      redirect_to boards_path
    end
  end

  def edit
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:id])
    if @board.user_id != @user.id
      redirect_to boards_path
    end
  end

  def update
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:id])
    if @list.update(name: params[:name], board_id: params[:board_id])
      redirect_to board_path(@board)
    else
      redirect_to boards_path
    end
  end

  def destroy
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:id])

		@list.destroy
		redirect_to board_path(@board)
  end


  private

  def list_params
    params.require(:list).permit(:name, :board_id)
  end

end
