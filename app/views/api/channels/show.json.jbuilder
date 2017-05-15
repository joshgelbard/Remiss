json.extract! @channel, :id, :name, :purpose, :channel_type
json.members do
  json.array! @channel.members do |user|
    json.id user.id
    json.username user.username
  end
end
json.messages do
  json.array! @channel.messages do |message|
    json.id message.id
    json.username message.author.username
    json.body message.body
    json.created_at message.created_at.strftime("%l:%M %p")
  end
end
