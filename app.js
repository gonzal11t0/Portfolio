window.addEventListener("load",function(){

/*boton ir arriba*/

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
});


/*circulo de progreso*/

$('#percent').on('change', function(){
    var val = parseInt($(this).val());
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
        val = 100; 
    }
    else{
        var r = $circle.attr('r');
        var c = Math.PI*(r*2);
            if (val < 0) { val = 0;}
                if (val > 100) { val = 100;}
                    var pct = ((100-val)/100)*c;
                        $circle.css({ strokeDashoffset: pct});
                            $('#cont').attr('data-pct',val);
    }
});

var btn=$(".btn");
//eliminar boton de git hub y linkedin

btn.mouseup(function () { 
    $(this).css("display","none")
});

this.document.querySelector(".dropdown-container").addEventListener("click",function(){
    document.querySelector(".dropdown-container ul").classList.toggle("show");
})
});

    

