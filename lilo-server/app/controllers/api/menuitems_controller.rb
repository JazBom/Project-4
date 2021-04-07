class Api::MenuitemsController < ApplicationController
  def index
    menuItems = Menuitem.includes(:menu_category).all
    render json: menuItems, include: [:menu_category]
  end

  def create
    puts menuitem_params
    category = MenuCategory.find(params[:menu_category_id])
    menuitem = Menuitem.create(item: menuitem_params[:item], price: menuitem_params[:price], menu_category: category)
    if menuitem.valid?
      render json: menuitem, status: 201
    else
      render json: { message: 'Unable to create menu item.' }, status: 500
    end
  end

  def show
    puts params[:id]
    render json: Menuitem.includes(:menu_category).find(params[:id]), include: [:menu_category]
  end

  def update
    puts params[:id]
    category = MenuCategory.find(params[:menu_category_id])
    menuItemToUpdate = Menuitem.find(params[:id])
    updatedMenuItem = menuItemToUpdate.update(item: params[:item], price: params[:price], menu_category: category)
    render json: updatedMenuItem, include: [:menu_category]
  end

  def destroy
    puts params[:id]
    Menuitem.destroy(params[:id])
    render json: { message: 'Successfully deleted menu item.' }
  end

  def menuitem_params
    params.required(:menuitem).permit(:item, :price, :menu_category_id)
  end
end
