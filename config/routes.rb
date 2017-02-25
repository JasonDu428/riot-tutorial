Rails.application.routes.draw do
  get 'prete', to: 'prete#index'

  get '/loop_event_callback/', to: 'loop_event_callback#index'
  get '/loop_event_callback/people', to: 'loop_event_callback#people'
  get 'welcome/index'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
