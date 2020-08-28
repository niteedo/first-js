$(document).ready(function(){


        // Selector de tema

        var themes = $("#theme");

        $("#to-green").click(function(){
            themes.attr("href" , "css/green.css")
    
        });
    
        $("#to-blue").click(function(){
            themes.attr("href" , "css/blue.css")
    
        });
    
        $("#to-red").click(function(){
            themes.attr("href" , "css/red.css")
    
        });

})
    

