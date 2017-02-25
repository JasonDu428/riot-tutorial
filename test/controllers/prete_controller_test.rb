require 'test_helper'

class PreteControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get prete_index_url
    assert_response :success
  end

end
