# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_10_144235) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assigned_projects", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_assigned_projects_on_project_id"
    t.index ["user_id"], name: "index_assigned_projects_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.text "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tickets", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.text "severity"
    t.text "status"
    t.text "type"
    t.bigint "user_id", null: false
    t.bigint "project_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_tickets_on_project_id"
    t.index ["user_id"], name: "index_tickets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.text "username"
    t.text "email"
    t.text "permission"
    t.text "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "role"
    t.text "image"
  end

  add_foreign_key "assigned_projects", "projects"
  add_foreign_key "assigned_projects", "users"
  add_foreign_key "tickets", "projects"
  add_foreign_key "tickets", "users"
end
