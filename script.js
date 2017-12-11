VK.init({
    apiId: 6294974,  // app id
});

VK.Auth.getLoginStatus(function (response) {
    if (response.status == 'connected') {
        isLogin = true;
    }
});




