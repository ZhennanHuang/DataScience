require(mongolite)
require(data.table)

env <- mongo("expenditure_v3", url = "mongodb://team:goteamgo@svm-ah3n16-COMP6235-temp.ecs.soton.ac.uk/expenditure")
imp <- env$find('{"quintile":1}')
quint1 <- imp[,-c(3,4,5, 12,10, 9, 13)] #remove useless columns - call head() to check before running
sapply(quint1, function(x) sum(is.na(x))) #check for NA 
quint1[is.na(quint1)] <- 0
quint1 <- quint1[-which(quint1$purchase == 0 ),] #clean 
quint1 <- quint1[-which(quint1$expense ==0),] #clean - 4349 item

#get quintile1, find elasticity for all items 

big <- data.table(quint1) 
big$purchase <- as.numeric(gsub(",", "", unlist(big$purchase))) #as-numeric fn
sapply(big, function(x) sum(is.na(x))) #check for NA 
big[,purchase := log(purchase)] #get log demand unit
big[,ppu := log(ppu)] #get log price
big[, description := as.character(description)] #change description class
big_loglog <- big[,list(list(lm(purchase ~ ppu))), by=description]
big_loglog_coef <- big_loglog[,unlist(V1)[2], by=description] #328 item 
check2 <- big_loglog_coef[which(is.na(big_loglog_coef$coefficients.ppu)),]

