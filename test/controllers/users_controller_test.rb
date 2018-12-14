require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url
    assert_response :success
  end

  test "should get new" do
    get new_user_url
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { address: @user.address, born_address: @user.born_address, facebook_url: @user.facebook_url, give_cost: @user.give_cost, give_free: @user.give_free, image: @user.image, job_description: @user.job_description, job_type: @user.job_type, join_purpose: @user.join_purpose, life_carrier: @user.life_carrier, name: @user.name, needs: @user.needs, owned_media: @user.owned_media, perspective_talent: @user.perspective_talent, recent_news: @user.recent_news, thinking: @user.thinking, trouble: @user.trouble, vision: @user.vision, workat: @user.workat } }
    end

    assert_redirected_to user_url(User.last)
  end

  test "should show user" do
    get user_url(@user)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_url(@user)
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { address: @user.address, born_address: @user.born_address, facebook_url: @user.facebook_url, give_cost: @user.give_cost, give_free: @user.give_free, image: @user.image, job_description: @user.job_description, job_type: @user.job_type, join_purpose: @user.join_purpose, life_carrier: @user.life_carrier, name: @user.name, needs: @user.needs, owned_media: @user.owned_media, perspective_talent: @user.perspective_talent, recent_news: @user.recent_news, thinking: @user.thinking, trouble: @user.trouble, vision: @user.vision, workat: @user.workat } }
    assert_redirected_to user_url(@user)
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user)
    end

    assert_redirected_to users_url
  end
end
