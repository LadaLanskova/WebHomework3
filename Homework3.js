
setTimeout(function() {
    function GetUserName() {
        UserName=prompt("Как тебя зовут, UserName?", "Напишите имя")
        return UserName
        } 
        const User = GetUserName() 
        alert("Приятно познакомиться, " + User)
}, 500);