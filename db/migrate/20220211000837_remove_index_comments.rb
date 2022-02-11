class RemoveIndexComments < ActiveRecord::Migration[6.1]
  def change
    remove_index :comments, :song_id 
    add_index :comments, :song_id
  end
end
