var exports=module.exports={};
    exports.MinNumber=function(a,b) 
    { var coounter=0;
     while(a>0)
         {
             if(a>=b)
                 {
                   coounter++;  
                 }
             a=a-b;
             
         }
        return coounter;
    };