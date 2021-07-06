class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :acreage, null: false
      t.string :contact, null: false

      t.timestamps
    end
  end
end