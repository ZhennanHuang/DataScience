colnames(big_loglog_coef_1) <- c("category", "q1")
colnames(big_loglog_coef_2) <- c("category", "q2")
colnames(big_loglog_coef_3) <- c("category", "q3")
colnames(big_loglog_coef_4) <- c("category", "q4")
colnames(big_loglog_coef_5) <- c("category", "q5")

data <- Reduce(function(x, y) merge(x, y, by=c("category")), 
               list(big_loglog_coef_1, big_loglog_coef_2, big_loglog_coef_3, big_loglog_coef_4, big_loglog_coef_5))

data_list <- sapply(data[,c(2:6)], list)
boxplot(data_list)

write.csv(data, file="loglog_coef_v3.csv")

source(file = "ignored_item.R")
