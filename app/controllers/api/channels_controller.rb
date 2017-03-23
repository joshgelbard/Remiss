class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def update
    @channel = Channel.find_by_name(params[:id])
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

  def show
    @channel = Channel.find_by_name(params[:id])
    render :show
  end

  def join
    @channel = Channel.find_by_name(params[:id])
    if @channel.allow_user?(current_user)
      ChannelMembership.create(user_id: current_user.id, channel_id: @channel.id)
      render :show
    else
      render json: ["User not allowed to join this channel"]
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :channel_type, :purpose, :invitee_id)
  end

end
