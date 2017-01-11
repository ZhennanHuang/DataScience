##label columns for quintile datasets

colnames(loglog_coef_dt_1) <- c("category", "q1")
colnames(loglog_coef_dt_2) <- c("category", "q2")
colnames(loglog_coef_dt_3) <- c("category", "q3")
colnames(loglog_coef_dt_4) <- c("category", "q4")
colnames(loglog_coef_dt_5) <- c("category", "q5")

##quintile datasets merge

data <- Reduce(function(x, y) merge(x, y, by=c("category")), 
               list(loglog_coef_dt_1, loglog_coef_dt_2, loglog_coef_dt_3, loglog_coef_dt_4, loglog_coef_dt_5))

write.csv(data, file="local")

