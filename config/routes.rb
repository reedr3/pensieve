Rails.application.routes.draw do
  devise_for :users

  resources :boards do
    resources :lists
  end

  resources :boards do
    resources :cards
  end

  root "boards#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
