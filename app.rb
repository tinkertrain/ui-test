#!/usr/bin/env ruby -I ../lib -I lib
require 'sinatra'

get '/' do
  haml :index, :layout => :layout
end
