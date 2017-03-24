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

josh = User.create!(username: 'josh', password: 'password')

general = Channel.create!(name: 'general', channel_type: 'CHANNEL', creator_id: josh.id, purpose: 'General discussion. Stuff that matters to everyone')
c = Channel.create!(name: 'join_more_channels', channel_type: 'CHANNEL', creator_id: josh.id, purpose: 'Encourage people to try joining channels')
Message.create!(channel_id: c.id, user_id: josh.id, body: "You can click the word CHANNELS on the left sidebar to see more channels you can join")
Message.create!(channel_id: c.id, user_id: josh.id, body: "Or click the plus sign to try making one!")
jon = User.create!(username: 'jon', password: 'password')
catlover = User.create!(username: 'i_love_cats23', password: 'password')
doglover = User.create!(username: 'i_love_dogs24', password: 'password')
hmm = User.create!(username: 'hmmm', password: 'password')
longname = User.create!(username: 'long_user_name_haver', password: 'password')
underscore = User.create!(username: '_', password: 'password')
mangoes = User.create!(username: 'mangoes', password: 'password')
nonsense = User.create!(username: 'wDcR9oIIbnD', password: 'password')
qadir = User.create!(username: 'qadir', password: 'password')
pip = User.create!(username: 'password-is-password', password: 'password')
pnh = User.create!(username: 'pls_no_hack', password: 'password')

c = general
  Message.create!(user_id: josh.id, channel_id: c.id, body: "Hey everyone. This channel is for stuff that might be relevant to anyone. Also free to introduce yourself here if you just joined.")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "I'm Josh. I made this website. Please be nice to it!")
  Message.create!(user_id: mangoes.id, channel_id: c.id, body: "hey guys")
  Message.create!(user_id: mangoes.id, channel_id: c.id, body: "couldn't think of a good username so i named myself after my favorite fruit")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "That works!")
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "There's no channel to talk about cats????")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "Make one! Anyone can make a chonnel")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "channel*")
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "OK, did it. Join plz")
  Message.create!(user_id: longname.id, channel_id: c.id, body: "Hey all. Just joined. Almost 100% sure this is the longest username currently in existence")
  Message.create!(user_id: underscore.id, channel_id: c.id, body: "<-- shortest")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "Very impressive, both of you")
  Message.create!(user_id: longname.id, channel_id: c.id, body: "I'm making a gardening channel, feel free to drop by")

  Message.create!(user_id: josh.id, channel_id: c.id, body: "Hey, new users: If you haven't already, check out the channel 'join_more_channels' for a tip ;)")

c = Channel.create!(name: 'cats', channel_type: 'CHANNEL', creator_id: catlover.id, purpose: 'Talk here about your favorite animal, the cat')
  ChannelMembership.create!(user_id: josh.id, channel_id: c.id)
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "Hey guys!")
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "I made this channel for us to talk about our beloved pet cats")
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "Who are my fellow cat lovers?")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "me")
  ChannelMembership.create!(user_id: doglover.id, channel_id: c.id)
  Message.create!(user_id: doglover.id, channel_id: c.id, body: "Me too")
  Message.create!(user_id: doglover.id, channel_id: c.id, body: "Just kidding")
  ChannelMembership.create!(user_id: longname.id, channel_id: c.id)
  Message.create!(user_id: longname.id, channel_id: c.id, body: "We're thinking of adopting a cat.")
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "That's wonderful. Consider adopting an older cat instead of a kitten! They don't get enough love")
c = Channel.create!(name: 'dogs', channel_type: 'CHANNEL', creator_id: doglover.id, purpose: 'The greatest of all pets')
  ChannelMembership.create!(user_id: josh.id, channel_id: c.id)
  ChannelMembership.create!(user_id: catlover.id, channel_id: c.id)
  Message.create!(user_id: doglover.id, channel_id: c.id, body: "Any dog lovers around?")
  Message.create!(user_id: catlover.id, channel_id: c.id, body: "Me!")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "what a twist")
c = Channel.create!(name: 'capybaras', channel_type: 'CHANNEL', creator_id: josh.id, purpose: 'There can never be enough channels about cute animals')
  ChannelMembership.create!(user_id: qadir.id, channel_id: c.id)
  Message.create!(user_id: josh.id, channel_id: c.id, body: "After seeing the popularity of our #dogs and #cats channels, I have decided a channel about capybaras is in order")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "If you are not familiar with the capybara, I recommend checking youtube for videos of them relaxing in hot springs")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "They are enormous rodents and they just love to chill out all the time")
  Message.create!(user_id: qadir.id, channel_id: c.id, body: "Sounds good dude. I will look up some videos when I get home.")
c = Channel.create!(name: 'gardening_tips', channel_type: 'CHANNEL', creator_id: longname.id, purpose: 'Make things grow')
  ChannelMembership.create!(user_id: mangoes.id, channel_id: c.id)
  Message.create!(user_id: longname.id, channel_id: c.id, body: "Hi all")
  Message.create!(user_id: mangoes.id, channel_id: c.id, body: "Hey longname!")
  Message.create!(user_id: mangoes.id, channel_id: c.id, body: "Didn't know you were an expert gardener")
  Message.create!(user_id: longname.id, channel_id: c.id, body: "Oh, I'm not. I made this channel hoping someone would give me tips")
c = Channel.create!(name: 'security', channel_type: 'CHANNEL', creator_id: pip.id, purpose: 'Keep up to date with cybersecurity news and ask for help from experts')
  Message.create!(user_id: pip.id, channel_id: c.id, body: "cybersecurity expert here")
  Message.create!(user_id: pip.id, channel_id: c.id, body: "ask me anything about, for example, having a secure password")
  ChannelMembership.create!(user_id: hmm.id, channel_id: c.id)
  Message.create!(user_id: hmm.id, channel_id: c.id, body: "Wait, 'password-is-password'")
  Message.create!(user_id: hmm.id, channel_id: c.id, body: "Is your password really 'password'?")
  Message.create!(user_id: hmm.id, channel_id: c.id, body: "Hold on")
  Message.create!(user_id: pip.id, channel_id: c.id, body: "UPDATE: It was.")
c = Channel.create!(name: 'earworms', channel_type: 'CHANNEL', creator_id: qadir.id, purpose: "Earworms are catchy tunes you can't get out of your head. Discuss them here")
  Message.create!(user_id: qadir.id, channel_id: c.id, body: "So, guys. I have had this song in my head for weeks now.")
  Message.create!(user_id: qadir.id, channel_id: c.id, body: "It goes like this:")
  Message.create!(user_id: qadir.id, channel_id: c.id, body: "Hmm, hm hm hm hm hm, hm.")
  Message.create!(user_id: qadir.id, channel_id: c.id, body: "But I have no idea what it's called. Any ideas? Also, how do I get rid of it? I keep humming it. I'm worried I'm driving everyone around me crazy.")
  ChannelMembership.create!(user_id: jon.id, channel_id: c.id)
  Message.create!(user_id: jon.id, channel_id: c.id, body: "Like, 'Hmm, hm HM hm hm hm... hm'?")
  ChannelMembership.create!(user_id: josh.id, channel_id: c.id)
  Message.create!(user_id: josh.id, channel_id: c.id, body: "dude. i have told you. it's 'seven nation army' by the white stripes")
  Message.create!(user_id: josh.id, channel_id: c.id, body: "and yes, it's driving me crazy")

99.times do |i|
  User.create!(username: "guest_#{i + 1}", password: 'password')
end

Message.create!(user_id: josh.id, channel_id: general.id, body: 'Hello, #general!')
