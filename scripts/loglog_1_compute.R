require(mongolite)
require(data.table)

## loading database and cleaning dataset

connect <- mongo("expenditure_v3", url = "mongodb://team:goteamgo@svm-ah3n16-COMP6235-temp.ecs.soton.ac.uk/expenditure")
import <- connect$find('{"quintile":1}')
quintile <- import[,-c(3,4,5, 12,10, 9, 13)] #remove useless columns - call head() to check before running
sapply(quintile, function(x) sum(is.na(x))) #check for NA 
quintile[is.na(quintile)] <- 0
quintile <- quintile[-which(quintile$purchase == 0 ),] #clean 
quintile <- quintile[-which(quintile$expense ==0),] #clean - 4349 item

#get quintile data table -> find elasticity for all items 

quintile_dt <- data.table(quintile) 
quintile_dt$purchase <- as.numeric(gsub(",", "", unlist(quintile_dt$purchase))) #as numeric function
sapply(quintile_dt, function(x) sum(is.na(x))) #check for NA 
quintile_dt[,purchase := log(purchase)] #get log demand unit
quintile_dt[,ppu := log(ppu)] #get log price per unit (ppu)
quintile_dt[, description := as.character(description)] #change description class
loglog_dt <- quintile_dt[,list(list(lm(purchase ~ ppu))), by=description]
loglog_coef_dt <- loglog_dt[,unlist(V1)[2], by=description] #328 item 

check_for_na <- loglog_coef_dt[which(is.na(loglog_coef_dt$coefficients.ppu)),] ##check for NA

