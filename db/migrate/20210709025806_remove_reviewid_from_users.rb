class RemoveReviewidFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :review_id
  end
end
