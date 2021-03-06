class Api::TrailsController < ApplicationController

  def index
    @trails = Trail.where(park_id: params[:park_id])
    render :index
  end

  def show
    @trail = Trail.find_by(id: params[:id])
    render :show
  end

end