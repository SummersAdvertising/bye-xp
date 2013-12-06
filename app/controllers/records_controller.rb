class RecordsController < ApplicationController
  # GET /records
  # GET /records.json
  def index
    @records = Record.order( 'score DESC, time ASC' ).page params[:page]
    
    if (!params[ :email ].nil? && @myRecord = Record.where( :email => params[ :email ] ).first) || (!params[ :id ].nil? && @myRecord = Record.where( :id => params[ :id ] ).first)
   		   		
   		@myRank = (Record.where('score > ? OR ( score = ? AND time < ?) OR ( score = ? AND time = ? AND updated_at > ?)', @myRecord.score, @myRecord.score, @myRecord.time, @myRecord.score, @myRecord.time, @myRecord.updated_at ).count) +1
   		
    end
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @records }
    end
  end
  # GET /records/new
  # GET /records/new.json
  def new
  
  end


  # POST /records
  # POST /records.json
  def create
  
    respond_to do |format|  	    	
	  	begin	  		  	
	   		model = JSON.parse( params[:model] )
	  	    
	  	rescue	  	
	  	    format.html { render action: "new" }
	        format.json { render json: @record.errors, status: :unprocessable_entity }
	  	
	  	else
	  		#@record = Record.where( :email => model["email"] ).first	  		
	  		
	  		model.delete('authenticity_token')
	  		
	  		 if @record.nil?
		  		 @record = Record.new(model)
		  		 @record.save
		    else
		    	if @record.score < model["score"] || ( @record.score == model["score"] && @record.time > model["time"] )
		    		@record.update_attributes(model)		    	
		    	end
		    end
		    
			format.html { redirect_to @record, notice: 'Record was successfully created.' }
			format.json { render json: @record, status: :created, location: @record }
	  	
	  	end    
    end
  end
end
