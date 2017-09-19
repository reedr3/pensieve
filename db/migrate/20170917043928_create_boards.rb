class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :name
      t.string :color
      t.integer :user_id

      t.timestamps
    end
  end
end
