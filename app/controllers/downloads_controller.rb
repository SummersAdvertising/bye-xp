class DownloadsController < ApplicationController

	def count
	
		@count = Download.all.count
	
	end

	def new
	
		@download = Download.new
		
		@download.link = params[ :link ]
		
		@download.ip = request.remote_ip
		
		@download.save()
		
		redirect_to params[ :link ]
	
	end

end
