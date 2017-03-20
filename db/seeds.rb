# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
ChannelMembership.destroy_all
Message.destroy_all

99.times do |i|
  User.create!(username: "guest_#{i + 1}", password: 'password')
end

josh = User.create!(username: 'josh', password: 'password')
jon = User.create!(username: 'jon', password: 'password')
general = Channel.create!(name: 'general', channel_type: 'CHANNEL', creator_id: josh.id)
random = Channel.create!(name: 'random', channel_type: 'CHANNEL', creator_id: josh.id)
the_void = Channel.create!(name: 'the_void', channel_type: 'CHANNEL', creator_id: josh.id, purpose: 'contemplation of the void. no messages here, please.')
ChannelMembership.create!(user_id: josh.id, channel_id: general.id)
ChannelMembership.create!(user_id: josh.id, channel_id: random.id)
ChannelMembership.create!(user_id: josh.id, channel_id: the_void.id)
ChannelMembership.create!(user_id: jon.id, channel_id: general.id)
ChannelMembership.create!(user_id: jon.id, channel_id: the_void.id)
Message.create!(user_id: josh.id, channel_id: general.id, body: 'Hello, #general')
Message.create!(user_id: jon.id, channel_id: general.id, body: 'Hi, Josh')
Message.create!(user_id: jon.id, channel_id: random.id, body: 'Hello, #random')
