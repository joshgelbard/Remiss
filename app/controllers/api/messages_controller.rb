class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 400
    end
  end

  def update
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
      render json: @message
    else
      render json: @message.errors.full_messages, status: 400
    end
  end

  private

  def message_params
    params.require(:message).permit(:channel_id, :user_id, :body)
  end
end
