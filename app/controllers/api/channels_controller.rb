class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update_attributes(channel_params)
      render json: @channel
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def index
    @channels = Channel.all
    render :index
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :channel_type, :purpose)
  end

end
