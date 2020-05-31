window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function(callback){window.setTimeout(callback, 1000 / 60);};
})();

var div = $('#entry-thumb'),
    wrapScreenWidth = div.width(),
    wrapHeight = div.outerWidth(),
    listWidth = div.find('tr').outerWidth();
var go = 0;
function anim(){
    var act = Math.round(div.scrollLeft()),
        diff = Math.abs(act-go);
    if(diff)
        div.scrollLeft(div.scrollLeft()+ (act<go?1:-1)*diff*0.03);      
    window.requestAnimFrame(anim);                  
};

anim();

div.on('mousemove', function(e) {
    var cPointY = e.pageX,
        dP = ((cPointY / wrapHeight));
    go = Math.max(0,Math.round((listWidth * dP) - wrapScreenWidth));

}); 