## Sample State
````
{
  messageDisplay: {
    4: {
      id: 4,
      author: "Jon",
      text: "Is this thing on?",
      timestamp: "2017-03-14 11:59:59"
    },

    18: {
      id: 18,
      author: "Sarah",
      text: "Yes, it's on.",
      timestamp: "2017-03-15 12:05:15"
    }
  },

  channelInfo: {
    id: 2,
    channelType: "channel",
    name: "general",
    members: [
      {id: 1, username: "Sarah"},
      {id: 2, username: "Jon"}
    ]
  },

  session: {
    currentUser: {id: 2, username: "Jon"},
    errors: []
  },

  numberOfChannels: 2,

  visibleChannels: {
    1: { id: 1, name: "#general" },
    2: { id: 2, name: "#random" }
  },

  visibleConversations: {
    1: { id: 1, participants: [{id: 2, username: "Jon"}] }
    2: { id: 2, participants: [{id: 1, username: "Sarah"}, {id: 2, username: "Jon"}] }
  }
}
````
