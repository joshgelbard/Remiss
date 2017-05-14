require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "POST #create" do
    context "with valid params" do
      ok_params = { user: { username: 'some_user', password: 'password' } }
      before do
        User.destroy_all
        post :create, params: ok_params, format: 'json'
      end

      it("should succeed") { expect(response).to be_success }
      it "should persist a user to the database" do
        expect(User.exists?).to be(true)
      end
      it "should log in the user" do
        new_token = User.find_by_username('some_user').session_token
        expect(session['session_token']).to eq(new_token)
      end
    end

    context "with invalid params" do
      pw_too_short = { user: { username: 'some_user', password: '123' } }
      before do
        User.destroy_all
        post :create, params: pw_too_short, format: 'json'
      end

      it("should fail") { expect(response).not_to be_success }
      it "should not persist anything to the database" do
        expect(User.exists?).to be(false)
      end
      it "should indicate what error caused the failure" do
        expect(response.body).to match(/password/i)
      end
    end

  end
end
