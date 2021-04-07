# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   menu_categories = MenuCategory.create([{ category: 'specials' }, { category: 'coffee' }, { category: 'breakfast' }, { category: 'lunch' }, { category: 'snacks' }])
user = User.create(name: 'Jess', password: 'abc123')
specials = MenuCategory.create(category: 'specials')
coffee = MenuCategory.create(category: 'coffee')
breakfast = MenuCategory.create(category: 'breakfast')
lunch = MenuCategory.create(category: 'lunch')
snacks = MenuCategory.create(category: 'snacks')

Menuitem.create(item: 'Dumplings (beef)', price: '$10', menu_category: specials)
Menuitem.create(item: 'Flat white', price: '$4', menu_category: coffee)
Menuitem.create(item: 'Latte', price: '$4', menu_category: coffee)
Menuitem.create(item: 'Espresso', price: '$3', menu_category: coffee)

