#! /bin/env ruby
# coding: utf-8
require 'webrick'

WEBrick::HTTPUtils::DefaultMimeTypes["mjs"] = "application/javascript"

server = WEBrick::HTTPServer.new(:BindAddress => '0.0.0.0', :Port => 12345, :DoNotReverseLookup => true)

server.mount('/', WEBrick::HTTPServlet::FileHandler, Dir.pwd, {:FancyIndexing => true})

trap(:INT){server.shutdown}
server.start
