# Remiss

## What is it?

Remiss is a Slack-like real-time chat website.

You can try it out [here.](http://remiss.herokuapp.com)

## How does it work?

Remiss is a single-page application with a Rails/Postgres backend and a React/Redux frontend. A static HTML page is served up containing the root React component, which is populated with child components based on the URL visited. These child components make AJAX requests to the Rails backend and change what the user sees based on the JSON-formatted data they receive. Rails 5's new Action Cable is used to enable live chat through the WebSocket protocol.

### Live Chat with Action Cable

When a channel receives a new message, all users viewing that channel should be able to see it update immediately. To make that happen, we do some work on the "subscribing" side and some on the "broadcasting" side.

Subscribing: We subscribe anyone entering a chat to an Action Cable channel named "channel_name-of-channel". Users can only have one chat channel visible at a time, so we also unsubscribe them from any previous channel subscription they may have had. This subscription listens for data to be broadcast on that channel, at which point it dispatches a 'receiveMessage' Redux action that, when caught by a reducer, will update what the user sees on the front end, adding the message.

Broadcasting: We add to our Message model an after_commit method that sets up a Rails ActiveJob with two arguments: the newly-created message and the channel to which it belongs. This job looks at the channel to decide where to broadcast -- "channel_name-of-channel" as before -- and passes the message as data. This data is what the subscription mentioned above is listening for, and what will ultimately be passed to the front end.

Now everyone who is on a URL that matches /messages/name-of-channel will see the messages whose channel association has that name as they are created.

### Channels and Direct Messages

Public Channels and DMs are similar enough that they are contained in one table and distinguished by a channel_type key, which can be either 'CHANNEL' or 'DM.' Direct messages have an invitee_id key as well, which automatically creates a subscription for the invited user.

## Future of this project

What I'll work on adding next, as I find the time:

Presence notifications: Slack has little green dots that tell you whether someone is online. These could be implemented by subscribing everyone to a PresenceNotifications channel.

Group DMs: At the moment, you can only DM one person. Slack has group DMs.
