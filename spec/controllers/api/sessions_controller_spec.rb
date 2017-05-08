require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do

  let(:u_password) { 'password123' }
  let!(:u) do
    FactoryGirl.create(:user, password: u_password)
  end

  describe 'POST #create' do

    context 'with valid params' do
      let :ok_params do
        { user: { username: u.username, password: u_password } }
      end
      before do
        @controller.logout!
        post :create, params: ok_params, format: 'json'
      end
      it("should succeed") { expect(response).to be_success }
      it "should log in the user" do
        new_token = User.find(u.id).session_token
        expect(session['session_token']).to eq(new_token)
      end
      it { should render_template('api/users/show') }
    end

    context 'with invalid params' do
      let :wrong_pw_params do
        { user: { username: u.username, password: u_password + '2' } }
      end
      before do
        @controller.logout!
        post :create, params: wrong_pw_params, format: 'json'
      end
      it("should not succeed") { expect(response).not_to be_success }
    end
  end

  describe "DELETE #destroy" do
    context "with a logged in user" do
      before do
        @controller.instance_variable_set(:@current_user, u)
        session[:session_token] = u.session_token
      end
      it "should log out the user" do
        user_token = u.session_token
        delete :destroy
        expect(session['session_token']).not_to eq(user_token)
      end
    end
  end

end
