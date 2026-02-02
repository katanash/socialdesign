Rails.application.routes.draw do

	root to: redirect('/saas_products')

  resources :users
  get 'members' => 'users#members'

  resources :saas_products do
    collection do
      get 'compare'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
