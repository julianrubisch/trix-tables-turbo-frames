Rails.application.routes.draw do
  resources :articles do
    member do
      get :form
    end
  end

  resources :tables
end
