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
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/messages/:channelName(/details)" | "ChatAreaContainer" |
| "/channels" | "ChannelChooserContainer" |
| "/channels/new" | "CreateChannelFormContainer" |
| "/conversations" | "ConversationChooserContainer" |
