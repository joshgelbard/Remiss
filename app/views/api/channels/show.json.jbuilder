json.extract! @channel, :id, :name, :purpose, :channel_type
json.members @channel.members, partial: 'api/users/user', as: :user
json.messages @channel.messages, partial: 'api/messages/message', as: :message
