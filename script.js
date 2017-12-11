// VK.init({
//     apiId: 6294974,  // app id
// });

// VK.Auth.getLoginStatus(function (response) {
//     if (response.status == 'connected') {
//         console.log(response.status)
//     }
// });

VK.init({
    apiId: 6294974
});

function authInfo(response) {    
    if(response.status=='connected') {  // если пользователь залогинен в ВК     
        if (typeof(response.session.user) == 'undefined') { // этого поля нет 
            VK.Api.call('users.get', { uid: response.session.mid }, function(r) { 
                console.log(r.response[0].first_name+' '+r.response[0].last_name)
                console.log('user_id: '+response.session.mid)
            });
        } else {
            console.log(response.session.user.first_name+' '+response.session.user.last_name);
            console.log('user_id: '+response.session.mid);
        }
    } else {
        VK.Auth.login(authInfo); // опционально можем спалиться и вызвать всплывающее окно авторизации
    }
}

VK.Auth.getLoginStatus(authInfo) 

