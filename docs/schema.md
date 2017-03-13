# Schema

## Users

column          |    data type   |  details
----------------|----------------|
id              | integer        | not null, primary key
username        | string         | not null, indexed, unique
email           | string         | not null, indexed, unique
session_token   | string         | not null, indexed, unique
password_digest | string         | not null

## Messages

column          |    data type   |  details
----------------|----------------|
id              | integer        | not null, primary key
text            | text           |
channel_id      | integer        | not null, indexed, fkey channel

## Channel

column          |    data type   |  details
----------------|----------------|
id              | integer        | not null, primary key
name            | string         | not null, indexed, unique
channel_type    | string         | not null
purpose         | text           |

## Subscriptions

column          |    data type   |  details
----------------|----------------|
id              | integer        | not null, primary key
user_id         | integer        | not null, indexed, fkey user
channel_id      | integer        | not null, indexed, fkey channel
