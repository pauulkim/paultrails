class Api::SearchController < ApplicationController
  def index
    @search = Park.all
    render :index
  end
end