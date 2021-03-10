class DropAssignedProjectsTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :assigned_projects
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
