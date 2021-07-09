class AddReviewToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :review_id, :integer
    add_index :users, :review_id
  end
end
