Rails.application.routes.draw do

	root to: redirect('/user')

  resources :users

get 'members' => 'users#members'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
