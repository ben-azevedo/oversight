Rails.application.routes.draw do
  resources :tickets
  resources :projects
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :projects_users
end
