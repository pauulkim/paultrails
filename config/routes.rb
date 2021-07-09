Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :parks, only: [:show] do 
      resources :trails, only: [:index]
    end

    resources :trails, only: [:show]

    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  root 'static_pages#root'
end
