function save() {
    var name = $('#inputName').val()
    var note = $('#inputNote').val()
    var password = $('#password').val()
    $.post("/save", {
        "name" : name,
        "note" : note,
        "file" : "",
        "password" : password
    }, function(data,status) { 
        $('#recieved_server').text(status)
        $('#recieved').text(JSON.stringify(data, null, 6))
    })
}