class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.integer :score
      t.integer :time
      t.text :questions
      t.text :answers
      t.string :name
      t.string :email
      t.string :phone
      t.text :address

      t.timestamps
    end
  end
end
