$(document).ready(function(){
        
    $('#newsTicker').breakingNews({
        themeColor: '#282a34b9',
        source: {
            type:'rss',
            usingApi:'rss2json',
            rss2jsonApiKey: 'qqlq9apgcpvku4ctiv9epeyyyp7jf3ibecfa3d0t',
            url:'http://feeds.bbci.co.uk/news/rss.xml', 
            limit:7, 
            showingField:'title',
            linkEnabled: true,
            target:'_blank', 
            seperator: '<span class="bn-seperator" style="background-image:url(https://joshuaclark.co.uk/images/favicon.ico);"></span>',
            errorMsg: 'RSS Feed not loaded. Please try again.'
        }
    });

});