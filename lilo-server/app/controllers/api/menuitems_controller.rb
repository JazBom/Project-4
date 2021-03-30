class Api::MenuitemsController < ApplicationController
  def index
    render json: Menuitem.all
  end

  def create
    puts menuitem_params
    menuitem = Menuitem.create(menuitem_params)
    if menuitem.valid?
      render json: menuitem, status: 201
    else
      render json: { message: 'Unable to create menu item.' }, status: 500
    end
  end

  def show
    puts params[:id]
    render json: Menuitem.find(params[:id])
  end

  def update
    render json: Menuitem.find(params[:id]).update(menuitem_params)
  end

  def destroy
    puts params[:id]
    Menuitem.destroy(params[:id])
    render json: { message: 'Successfully deleted menu item.' }
  end

  def menuitem_params
    params.required(:menuitem).permit(:item, :price, :category)
  end
end
