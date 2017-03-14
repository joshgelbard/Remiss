# Components

### ChatAreaContainer

  * MessageDisplayContainer

  * ChannelNavigationBarContainer

  * ChannelDetailDisplayContainer

### MessageDisplayContainer

  * MessageDisplayIndex

      * MessageDisplayIndexItem

  * MessageCompose

### ChannelNavigationBarContainer

  * ChannelNavigationBar

    * UserAccountButton

    * ChannelIndexContainer

      * BrowseChannels

      * NewChannelButton

      * ChannelIndex

        * ChannelIndexItem

### ChannelHeaderContainer

  * ChannelHeader

### ChannelDetailDisplayContainer

  * ChannelDetailDisplayIndex

    * ChannelDetailDisplayItem

### ConversationChooserContainer

  * ConversationChooser

    * ConversationsIndex

      * ConversationsIndexItem

    * NewConversationForm

### ChannelChooserContainer

  * ChannelChooser

    * ChannelChooserIndex

      * ChannelChooserIndexItem

### CreateChannelFormContainer

  * CreateChannelForm

### AuthFormContainer

  * AuthForm


# Routes

|Path   | Component   |
|-------|-------------|
| "/" | redirect to /messages |
| "/messages" | redirect to /messages/<last_visited_channel> |
| "/messages/:channelName(/details)" | "ChatAreaContainer" |
| "/channels" | "ChannelChooserContainer" |
| "/channels/new" | "CreateChannelFormContainer" |
| "/conversations" | "ConversationChooserContainer" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |

Everything except signup/signin redirects to AuthFormContainer if you try to visit when you're not logged in.
