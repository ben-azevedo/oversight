# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ticket.destroy_all
Project.destroy_all
User.destroy_all

@admin = User.create!(
  username: "admin", 
  email:"admin@email.com", 
  password: "123456",
  permission: "Administrator",
  role: "Administrator",
  image: "https://ca.slack-edge.com/T0351JZQ0-UED3JT0Q1-8e6aed721530-512"
)

@manager = User.create!(
  username: "manager", 
  email:"manager@email.com", 
  password: "123456",
  permission: "Manager",
  role: "Project Manager",
  image: "https://ca.slack-edge.com/T0351JZQ0-UED3JT0Q1-8e6aed721530-512"
)

@employee = User.create!(
  username: "employee", 
  email:"employee@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Developer",
  image: "https://ca.slack-edge.com/T0351JZQ0-UED3JT0Q1-8e6aed721530-512"
)

@intern = User.create!(
  username: "intern", 
  email:"intern@email.com", 
  password: "123456",
  permission: "Intern",
  role: "Junior Dev",
  image: "https://ca.slack-edge.com/T0351JZQ0-UED3JT0Q1-8e6aed721530-512"
)

@aslan = User.create!(
  username: "Aslan Shaken", 
  email:"aslan@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Developer",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01G0FBKWKV-3ee2a4e5421c-512"
)

@ayeesha = User.create!(
  username: "Ayeesha Ellis", 
  email:"ayeesha@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Developer",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01ESL33J6Q-0cd07f4dbb5b-512"
)

@ben = User.create!(
  username: "Ben Azevedo", 
  email:"ben@email.com", 
  password: "123456",
  permission: "Administrator",
  role: "Junior Dev",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01F58DPXCP-78022d5ef928-512"
)

@damion = User.create!(
  username: "Damion Stewart", 
  email:"damion@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Developer",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01FWELBK1B-a3aaf16df439-512"
)

@daniel = User.create!(
  username: "Daniel Ramirez", 
  email:"daniel@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Developer",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01E4KD33V1-4ca081537bd6-512"
)

@david = User.create!(
  username: "David Whitlatch", 
  email:"david@email.com", 
  password: "123456",
  permission: "Manager",
  role: "Project Manager",
  image: "https://ca.slack-edge.com/T0351JZQ0-UB5U30KKP-f9a8c02857da-512"
)

@elizabeth = User.create!(
  username: "Elizabeth Rights", 
  email:"elizabeth@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Developer",
  image: "https://ca.slack-edge.com/T0351JZQ0-U0190AF5STU-406687749303-512"
)

@gigi = User.create!(
  username: "Gigi Mascio", 
  email:"gigi@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Administrator",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01G73Z7UAD-f9177c15b2b8-512"
)

@grady = User.create!(
  username: "Grady King", 
  email:"grady@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Administrator",
  image: "https://ca.slack-edge.com/T0351JZQ0-U01FL49R0MU-d6be475d343d-512"
)

@katiana = User.create!(
  username: "Katiana Lee", 
  email:"katiana@email.com", 
  password: "123456",
  permission: "Employee",
  role: "Project Manager",
  image: "https://ca.slack-edge.com/T0351JZQ0-UV20B6JUX-c45619859a41-512"
)

puts "#{User.count} users created"

@kgb = Project.create!(
  name: "KGB Adventures (P3)",
  description: "KGB Adventures is a travel website that helps plan the adventure of your dreams. The user has the options to sign in, sign out, and sign up. Once logged in, the user will have the ability to edit and delete an adventure as well as add an excursion. This MERN stack app is website and mobile friendly.",
  image: "https://s1.1zoom.me/big0/469/Vladimir_Putin_Men_Brown_Bears_Run_533027_1280x800.jpg",
  users: [@katiana, @grady, @ben]
)

@oversight = Project.create!(
  name: "Oversight (P4)",
  description: "KGB Adventures is a travel website that helps plan the adventure of your dreams. The user has the options to sign in, sign out, and sign up. Once logged in, the user will have the ability to edit and delete an adventure as well as add an excursion. This MERN stack app is website and mobile friendly.",
  image: "https://beanstalkwebsolutions.com/blog/wp-content/uploads/2017/03/photo_83099_20161120.jpg",
  users: [@david, @ben]
)

@graduate = Project.create!(
  name: "GA Graduation",
  description: "By completion of this 12-week program in March of 2021, we will have: developed full-stack applications with technologies such as Ruby on Rails and Express with Node.js, built full-stack applications by leveraging common design and architectural patterns like model–view–controller (MVC) and Representational State Transfer (REST), Safely modeled and stored data in SQL and NoSQL databases, created my own API's from scratch, conducted Front-end web application development with React, and built upon my data structures and algorithms knowledge specifically implemented in JavaScript and Ruby.",
  image: "https://i.pinimg.com/originals/1a/1d/7f/1a1d7f8785d1275576bd31c18e4006ac.png",
  users: [@aslan, @ayeesha, @ben, @damion, @daniel, @david, @elizabeth, @gigi, @grady, @katiana]
)

puts "#{Project.count} projects created"

Ticket.create!(
  name: "KGB Completion",
  description: "Clean up CSS and check all functionality. Debug where necessary.",
  severity: "Medium",
  status: "Closed",
  tipe: "Review",
  user: @ben,
  project: @kgb,
)

Ticket.create!(
  name: "Setup Rails",
  description: "Build ERD tables, models, controllers, and routes.",
  severity: "High",
  status: "Open",
  tipe: "Build Out",
  user: @ben,
  project: @oversight,
)

Ticket.create!(
  name: "Reach MVP",
  description: "Full CRUD, backend routes, frontend UX.",
  severity: "High",
  status: "Open",
  tipe: "Build Out",
  user: @ben,
  project: @oversight,
)

Ticket.create!(
  name: "Get Sleep",
  description: "A good night's rest helps you feel a whole lot better tomorrow.",
  severity: "Low",
  status: "Open",
  tipe: "Time Management",
  user: @ben,
  project: @oversight,
)

Ticket.create!(
  name: "GA Graduation",
  description: "Just Do It",
  severity: "High",
  status: "Open",
  tipe: "Special Task",
  user: @ben,
  project: @graduate,
)

Ticket.create!(
  name: "Personal Portfolio",
  description: "Create a personal website showcasing resume, projects, and coding skills.",
  severity: "High",
  status: "Open",
  tipe: "Special Task",
  user: @ben,
  project: @graduate,
)

puts "#{Ticket.count} tickets created"