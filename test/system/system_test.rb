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
  
end
