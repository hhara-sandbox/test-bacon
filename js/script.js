(function(){
    var mousedown = $(".l-wrapper").asEventStream("mousedown");
    var mousemove = $(".l-wrapper").asEventStream("mousemove");
    var stream2 = $(".hogehoge").asEventStream("click");

    stream2.map(1).scan(0, function(x, y){
        return x + y;
    }).onValue(function(val){
        console.log(val);
    });

})();