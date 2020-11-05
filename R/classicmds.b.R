
# This file is a generated template, your changes will not be overwritten

ClassicMDSClass <- R6::R6Class(
    "ClassicMDSClass",
    inherit = ClassicMDSBase,
    private = list(
          .run = function() {
            print('.running')
            text <- "started"
            
            output<-self$results$text
            
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
              
              if(dim(dat2)[2]>0)
              {
                
               dd <- dist(dat2,method=self$options$dist)                
                
     
                model <- cmdscale(dd, k=self$options$k,eig=TRUE )
                output$content<-print(model)
                labels = rep(NA,nrow(dat2))
                size=rep(1,nrow(dat2))
                color = rep(1,nrow(dat2))
                
                
                if(!is.null(self$options$label))
                {
                 labels <- jmvcore::select(self$data,self$options$label) 
                }
                if(!is.null(self$options$color))
                {
                  color <- jmvcore::select(self$data,self$options$color) 
                }
                
              if(!is.null(self$options$size))
              {
                
                  size <- jmvcore::select(self$data,self$options$size) 
               
              }
                
                                           
               image <- self$results$plot
               
                 df <- data.frame(
                   Labels=labels,
                   color=color,
                   Size=size,
                   V1=model$points[,1],
                   V2=model$points[,2])
                 
                   cn <- row.names(df)
                 
                   output$content<-df
                   colnames(df) <- c("Labels","Color","Size","V1","V2")
                   image$setState(list(cn=cn,df=df))
                                  
                
            }
             }}
            , 
          .plot = function(image, ...)
          {
            pd <- image$state
            plotData <- pd$df
            names <- pd$cn

            if(!is.null(plotData))
            {
              
                plot <- ggplot(plotData,aes(x=V1,y=V2,color=Color,size=Size))+ 
                xlab("Coordinate 1")+
                ylab("Coordinate 2")
                if(!is.na(plotData$Labels[1]))
                {
                  plot <- plot + geom_text(aes(label=Labels), colour="navy")
                } else {
                  plot <- plot + geom_point()
                }
               

              print(plot)#important
            }
            TRUE
            
          }
          
        
          ))
