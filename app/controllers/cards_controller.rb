class CardsController < ApplicationController
  def new
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:list_id])
    @card = Card.new
  end

  def create
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:list_id])
    @card = Card.new(name: params[:name], difficulty: params[:difficulty], list_id: params[:list_id], board_id: params[:board_id])
    if @card.save
      redirect_to board_path(@board)
    else
      redirect_to boards_path
    end
  end

  def edit
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:list_id])
    @card = Card.find(params[:id])
    if @board.user_id != @user.id
      redirect_to boards_path
    end
  end

  def update
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:list_id])
    @card = Card.find(params[:id])
    if @card.update(name: params[:name], difficulty: params[:difficulty], list_id: params[:list_id], board_id: params[:board_id])
      redirect_to board_path(@board)
    else
      redirect_to boards_path
    end
  end

  def destroy
    @user = current_user
    @board = Board.find(params[:board_id])
    @list = List.find(params[:list_id])
    @card = Card.find(params[:id])

		@card.destroy
		redirect_to board_path(@board)
  end


  private

  def card_params
    params.require(:card).permit(:name, :difficulty, :list_id, :board_id)
  end

end
