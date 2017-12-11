VK.init({
    apiId: 5512195,  // app id
});

VK.Auth.getLoginStatus(function (response) {
    if (response.status == 'connected') {
        isLogin = true;
    }
});




