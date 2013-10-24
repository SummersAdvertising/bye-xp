module RecordsHelper
	def get_rank( record )		
	
		if record.score > 13
			mClass = 'best'	
		elsif record.score > 10 
			mClass = 'good'
		else
			mClass = 'bad'
		end
		
		return mClass
	end
end
