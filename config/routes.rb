Rails.application.routes.draw do
  resources :tickets
  resources :assigned_projects
  resources :projects
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
end
