json.array! @channels do |channel|
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
  json.channel_type channel.channel_type
  json.creator channel.creator.username
  json.created_at channel.created_at.strftime("%b %d, %Y")
end
