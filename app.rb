#!/usr/bin/env ruby -I ../lib -I lib
require 'sinatra'
require 'sinatra/base'

class LonelyPlanet < Sinatra::Base
  get '/' do
    haml :index, :layout => :layout
  end
end
