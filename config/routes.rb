Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :parks, only: [:show] do 
      resources :trails, only: [:index]
    end

    resources :trails, only: [:show] do 
      resources :reviews, only: [:index]
    end

    resources :reviews, only: [:create, :update, :destroy]

    resources :search, only: [:index]
  end

  root 'static_pages#root'
end
