class ChangeParksAcreageColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :parks, :acreage, 'integer USING CAST(acreage AS integer)'
  end
end
