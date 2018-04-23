// webpack.dev.conf.js
// 新建路由
const express = require('express')
var apiRoutes = express.Router();


devServer: {
    before(apiRoutes){
        // 向前端提供接口 /api/getDiscList 
        apiRoutes.get('/api/getDiscList', function(req, res){
            const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
            // 使用axios get数据,请求的referer和host自定义,参数使用req.query
            // 将返回值response通过json让res接收,即前端获取的返回值
            axios.get(url, {
                headers: {
                    referer: 'http://c.y.qq.com/',
                    host: 'c.y.qq.com'
                },
                params: req.query
            }).then((response) => {
                // 将axions得到的response,通过res传到前端
                res.json(response.data);
            }).catch((e) => {
                console.log(e);
            });
        });
    }
}