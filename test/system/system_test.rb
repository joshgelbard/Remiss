require "application_system_test_case"

class SystemTest < ApplicationSystemTestCase

  test "signing up, changing channels, and sending a message" do
    visit '/#/signup'
    fill_in 'username', with: 'newuser123'
    fill_in 'password', with: 'password'
    click_on 'Create Account'
    assert_text '#general'
  end

  test "sending messages with action cable" do
    User.create(username: 'sarah', password: 'password')
    User.create(username: 'jim', password: 'password')
    visit '/#/signin'
    fill_in 'username', with: 'sarah'
    fill_in 'password', with: 'password'
    click_on 'Sign in'
    assert_text '#general'
    assert_no_text 'hi sarah!'
    using_session 'jim' do
      visit '/#/signin'
      fill_in 'username', with: 'jim'
      fill_in 'password', with: 'password'
      click_on 'Sign in'
      find('input').set("hi sarah!\n")
    end
    assert_text "hi sarah!"
  end

  test "creating a new channel, then going back to general" do
    User.create(username: 'aoeu123', password: 'password')
    visit '/#/signin'
    fill_in 'username', with: 'aoeu123'
    fill_in 'password', with: 'password'
    click_on 'Sign in'

    within('div', class: 'channels-index-header', match: :first) do
      find('i', class: ['fa', 'fa-plus-circle']).click
    end
    fill_in 'Name', with: 'some_new_channel'
    click_on 'Create Channel'
    assert_selector(:xpath, '//input[@placeholder="Message #some_new_channel"]')
    within('div', class: 'channels-index-header', match: :first) do
      find('span', class: 'header-browse-channels', text: /CHANNELS/).click
    end
    find('li', class: 'channel-form-row', text: /general/).click
    assert_selector(:xpath, '//input[@placeholder="Message #general"]')
  end

end
