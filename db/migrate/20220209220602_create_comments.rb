class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :commenter_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :comments, :commenter_id, unique:true
    add_index :comments, :song_id, unique:true
  end
end
