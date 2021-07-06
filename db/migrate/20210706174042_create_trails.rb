class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name, null:false
      t.text :summary, null:false
      t.text :description, null:false
      t.string :difficulty, null:false
      t.float :length, null:false
      t.integer :elevation_gain, null:false
      t.string :route_type, null:false
      t.float :lat, null:false
      t.float :long, null:false
      t.integer :park_id, null:false

      t.timestamps
    end
    add_index :trails, :park_id
  end
end