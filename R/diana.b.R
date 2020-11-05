
# This file is a generated template, your changes will not be overwritten

DianaClass <- R6::R6Class(
    "DianaClass",
    inherit = DianaBase,
    private = list(
        .run = function() {
          print('.running')
          text <- "started"
          
          if(!is.null(self$options$vars))
          {
            
            dat2 <- jmvcore::select(self$data,self$options$vars)
            
            ##standardize/normalize if necessary.
            if(self$options$stand)
            {
              for(var in 1:ncol(dat2))
              {
                tmp <- dat2[,var]
                dat2[,var] <- (tmp - mean(tmp,na.rm=T))/sd(tmp,na.rm=T)
                
              }
            }
            
            ##add labels
            if(!is.null(self$options$labels))
            {
              rownames(dat2) <- self$data[[self$options$labels]]
            }
            
            
            if(dim(dat2)[2]>0)
            {
              dist = dist(dat2,method = self$options$distan)
              model <- diana(dist)
              print(model)
              textResults <- self$results$text
              textResults$content <-  model
              
              footer <- "Notes on Hierarchical Clustering - Divisive
It is a top down process in which the data is splitted continuously until all the data tuples
are segregated. diana is the divisive hierarchical clustering method in R."
              
              f <- self$results$footer
              f$content <- footer
              
              image = self$results$plot
              image$setState(model)
              
            }}},
        .plot = function(image, ...)
        {
          plotData <- image$state
          if(!is.null(plotData))
          {
            plot <- ggdendrogram(plotData)
            print(plot)
          }
          TRUE
          
        }
    )
)
