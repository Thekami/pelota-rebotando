    
    // controlY, determina dirección vertical: (1 = baja, 0 = sube)
    var controlY = 0

    // controlX, determina dirección vertical: (1 = derecha, 0 = izquierda)
    var controlX = 0

    // variables que contienen la posicion de la pelota
    var x = 0
    var y = 0

    // elocidad de movimiento en pixels
    var velocidad = 1

    var rebotes = -2

    var fin;

    // variable que contiene 
    var idSetInterval = 0


    var wid_hei = 10
    var margen = 22

    $(document).on('click', '#iniciar', function(){
        iniciar()
        fin = $('#idRebotes').val()
        $('#idPB').attr('max', fin)
    })


    $(document).on('input', '#idVel', function(){
        velocidad = parseInt($('#idVel').val())
    })

    $(document).on('input', '#idTam', function(){
        
        var step = parseInt($('#idTam').val())

        $('#imagen').css({
            'width': (wid_hei+step)+'px',
            'height': (wid_hei+step)+'px',
            'border-radius': ((wid_hei+step)/2)+'px'
        })

        margen = (wid_hei+step);
    
    })


    function iniciar(){
        if(idSetInterval == 0)
            idSetInterval = setInterval("mover()",10) 
    
    }

    function mover(){
        // vertical
        if(controlY == 1)
            y += velocidad
        else
            y -= velocidad

        // console.log(y)
        

        if(y < 0){
            // pa abajo
            controlY = 1
            y = velocidad
            rebotes++
            $('#idPB').val(rebotes)
        }
        else if(y >= $('#container').outerHeight()-margen){
            rebotes++
            $('#idPB').val(rebotes)
            controlY = 0
            y = $('#container').outerHeight()-margen
        }

        // horizontal
        if(controlX == 1)
            x += velocidad
        else
            x -= velocidad

        // console.log(x)

        

        if(x < 0){

            controlX = 1
            x = velocidad
            rebotes++
            $('#idPB').val(rebotes)

        }
        else if(x >= $('#container').outerWidth()-margen){
            rebotes++
            $('#idPB').val(rebotes)
            controlX = 0
            x = $('#container').outerWidth()-margen
        }

        $('#imagen').css({
            'left': x+'px',
            'top': y+'px'
        })

        console.log(rebotes)

        if(rebotes == fin)     
            parar()

    }

    function parar(){

        clearInterval(idSetInterval)
        idSetInterval = 0
        rebotes = 0
        fin = 9999

    }