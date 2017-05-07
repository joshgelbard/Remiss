require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "POST #create" do
    context "with valid params" do
      ok_params = { user: { username: 'some_user', password: 'password' } }
      before { post :create, params: ok_params, format: 'json' }

      it("should succeed") { expect(response).to be_success }
      it "should persist a user to the database" do
        expect(User.exists?).to be(true)
      end
    end

    context "with invalid params" do
      pw_too_short = { user: { username: 'some_user', password: '123' } }
      before { post :create, params: pw_too_short, format: 'json' }
      
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
