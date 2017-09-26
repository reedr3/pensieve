class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :difficulty
      t.integer :list_id
      t.integer :board_id

      t.timestamps
    end
  end
end
