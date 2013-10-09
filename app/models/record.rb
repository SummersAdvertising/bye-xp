class Record < ActiveRecord::Base
  attr_accessible :address, :answers, :email, :name, :phone, :questions, :score, :time
end
