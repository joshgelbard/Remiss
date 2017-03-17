json.extract! @channel, :id, :name, :purpose, :channel_type
json.members @channel.members, partial: 'api/users/user', as: :user
