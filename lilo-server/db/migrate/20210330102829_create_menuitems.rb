class CreateMenuitems < ActiveRecord::Migration[6.1]
  def change
    create_table :menuitems do |t|
      t.string :item
      t.string :price
      t.belongs_to :menu_category, foreign_key: true

      t.timestamps
    end
  end
end
