Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :index, :show]
    resources :messages, only: [:create, :show]
    get '/channels/:id/join', to: 'channels#join'
  end
end
