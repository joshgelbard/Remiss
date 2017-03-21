@channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.name channel.name
    json.purpose channel.purpose
    json.channel_type channel.channel_type
    json.creator channel.creator.username
    json.created_at channel.created_at.strftime("%b %d, %Y")
    json.members channel.members, partial: 'api/users/user', as: :user
  end
end
