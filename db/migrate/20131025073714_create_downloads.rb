class CreateDownloads < ActiveRecord::Migration
  def change
    create_table :downloads do |t|
      t.text :link
      t.string :ip

      t.timestamps
    end
  end
end
