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

99.times do |i|
  User.create!(username: "guest_#{i + 1}", password: 'password')
end

josh = User.create!(username: 'josh', password: 'password')
general = Channel.create!(name: 'general', channel_type: 'CHANNEL')
ChannelMembership.create!(user_id: josh.id, channel_id: general.id)
