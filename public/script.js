let socket=io()

$('#loginBox').show()
$('#chatBox').hide()


$('#btnStart').click(() =>{
    socket.emit('login', {
        username :$('#inpUsername').val()
    })
})


socket.on('logged_in', ()=>{
    $('#loginBox').hide()
$('#chatBox').show()
})