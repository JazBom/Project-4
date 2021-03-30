class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :imgUrl

      t.timestamps
    end
  end
end
