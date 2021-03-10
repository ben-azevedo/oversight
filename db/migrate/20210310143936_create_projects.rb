class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.text :name
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
