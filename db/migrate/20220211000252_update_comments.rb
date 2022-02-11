class UpdateComments < ActiveRecord::Migration[6.1]
  def change
    remove_index :comments, :commenter_id
    add_index :comments, :commenter_id
  end
end
