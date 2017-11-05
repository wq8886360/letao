define(['jquery'],function(){
	 $.ajax({
            url: '/api/employcheckRootLogin',
            type: 'get',
            success: function (info) {               
                if(info.error){
                    location.href = '/login.html'
                }
            }
        })
})