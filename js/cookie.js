var cookie = {
    oSet : function(json, date){
        var d = new Date(new Date().getTime() + date * 24 * 60 * 60 * 1000).toUTCString();
        for(var key in json){
            document.cookie = key + '=' + json[key] + '; expires=' + d;
        }
    },
    oGet : function(attr){
        var cookie = document.cookie;
        var reg = new RegExp('\\b' + attr + '=([^;]+)(;|$)', 'g');
        var val = cookie.match(reg);
        return val ? val[1] : false;
    },
    oRemove : function(attr){
        var json = {};
        json[attr] = '';
        this.oSet(json, -1);
    }
};