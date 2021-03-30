require "test_helper"

class MenuitemsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get menuitems_index_url
    assert_response :success
  end

  test "should get new" do
    get menuitems_new_url
    assert_response :success
  end

  test "should get create" do
    get menuitems_create_url
    assert_response :success
  end

  test "should get show" do
    get menuitems_show_url
    assert_response :success
  end

  test "should get edit" do
    get menuitems_edit_url
    assert_response :success
  end

  test "should get update" do
    get menuitems_update_url
    assert_response :success
  end

  test "should get destroy" do
    get menuitems_destroy_url
    assert_response :success
  end
end
