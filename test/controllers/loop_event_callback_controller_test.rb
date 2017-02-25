require 'test_helper'

class LoopEventCallbackControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get loop_event_callback_index_url
    assert_response :success
  end

end
