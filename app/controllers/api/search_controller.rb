class Api::SearchController < ApplicationController
  def index
    parks = Park.all.select("id, name")
    trails = Trail.all.select("id, name")
    @search = parks + trails
    render :index
  end
end