require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  setup do
    @user = users(:one)
  end

  test "visiting the index" do
    visit users_url
    assert_selector "h1", text: "Users"
  end

  test "creating a User" do
    visit users_url
    click_on "New User"

    fill_in "Address", with: @user.address
    fill_in "Born address", with: @user.born_address
    fill_in "Facebook url", with: @user.facebook_url
    fill_in "Give cost", with: @user.give_cost
    fill_in "Give free", with: @user.give_free
    fill_in "Image", with: @user.image
    fill_in "Job description", with: @user.job_description
    fill_in "Job type", with: @user.job_type
    fill_in "Join purpose", with: @user.join_purpose
    fill_in "Life carrier", with: @user.life_carrier
    fill_in "Name", with: @user.name
    fill_in "Needs", with: @user.needs
    fill_in "Owned media", with: @user.owned_media
    fill_in "Perspective talent", with: @user.perspective_talent
    fill_in "Recent news", with: @user.recent_news
    fill_in "Thinking", with: @user.thinking
    fill_in "Trouble", with: @user.trouble
    fill_in "Vision", with: @user.vision
    fill_in "Workat", with: @user.workat
    click_on "Create User"

    assert_text "User was successfully created"
    click_on "Back"
  end

  test "updating a User" do
    visit users_url
    click_on "Edit", match: :first

    fill_in "Address", with: @user.address
    fill_in "Born address", with: @user.born_address
    fill_in "Facebook url", with: @user.facebook_url
    fill_in "Give cost", with: @user.give_cost
    fill_in "Give free", with: @user.give_free
    fill_in "Image", with: @user.image
    fill_in "Job description", with: @user.job_description
    fill_in "Job type", with: @user.job_type
    fill_in "Join purpose", with: @user.join_purpose
    fill_in "Life carrier", with: @user.life_carrier
    fill_in "Name", with: @user.name
    fill_in "Needs", with: @user.needs
    fill_in "Owned media", with: @user.owned_media
    fill_in "Perspective talent", with: @user.perspective_talent
    fill_in "Recent news", with: @user.recent_news
    fill_in "Thinking", with: @user.thinking
    fill_in "Trouble", with: @user.trouble
    fill_in "Vision", with: @user.vision
    fill_in "Workat", with: @user.workat
    click_on "Update User"

    assert_text "User was successfully updated"
    click_on "Back"
  end

  test "destroying a User" do
    visit users_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "User was successfully destroyed"
  end
end
