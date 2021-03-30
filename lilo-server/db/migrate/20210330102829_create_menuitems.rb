class CreateMenuitems < ActiveRecord::Migration[6.1]
  def change
    create_table :menuitems do |t|
      t.string :item
      t.string :price
      t.string :category

      t.timestamps
    end
  end
end
