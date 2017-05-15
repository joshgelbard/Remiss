@channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.name channel.name
    json.purpose channel.purpose
    json.channel_type channel.channel_type
    json.creator channel.creator.username
    json.created_at channel.created_at.strftime("%b %d, %Y")
    json.members do
      json.array! channel.members do |user|
        json.id user.id
        json.username user.username
      end
    end
  end
end
