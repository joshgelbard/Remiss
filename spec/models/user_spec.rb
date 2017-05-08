require 'rails_helper'

RSpec.describe User, type: :model do
  let(:subject_password) { 'password123' }
  subject { FactoryGirl.create(:user, password: subject_password) }

  describe "validations" do
    #password and digest
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
    #username
    it { should validate_presence_of(:username) }
    it { should validate_length_of(:username).is_at_least(1).is_at_most(20) }
    it "should have a url-safe username" do
      should_not allow_values("user&", "u/ser", "u;ser", " user").for(:username)
    end
    #session token
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:session_token) }
  end

  describe "associations" do
    it { should have_many(:channel_memberships) }
    it { should have_many(:channels).through(:channel_memberships) }
    it { should have_many(:messages) }
  end

  describe "::find_by_credentials" do
    context "with wrong/missing username or password" do
      it "should not return any user" do
        expect_creds_to_fail = Proc.new do |username, pw|
          expect(User.find_by_credentials(username, pw)).not_to eq(subject)
        end
        expect_creds_to_fail.call(subject.username + '2', subject_password)
        expect_creds_to_fail.call(subject.username, subject_password + '2')
        expect_creds_to_fail.call(nil, subject_password)
        expect_creds_to_fail.call(subject.username, nil)
      end
    end

    context "with correct username and password" do
      it "should return the found user" do
        res = User.find_by_credentials(subject.username, subject_password)
        expect(res).to eq(subject)
      end
    end
  end

  describe "#reset_session_token" do
    it "should change the session token associated with the user" do
      expect do
        subject.reset_session_token!
      end.to change { User.find(subject.id).session_token }
    end
  end

end
