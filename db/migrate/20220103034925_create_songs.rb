class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title, null:false 
      t.integer :artist_id, null:false 
      t.string :genre 
      t.timestamps
    end
    add_index :songs, :title 
    add_index :songs, :artist_id
  end
end
