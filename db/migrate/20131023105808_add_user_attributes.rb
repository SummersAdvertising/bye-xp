class AddUserAttributes < ActiveRecord::Migration
  def change
  	add_column :records, :realname, :string
  	add_column :records, :gender, :string
  end
end
