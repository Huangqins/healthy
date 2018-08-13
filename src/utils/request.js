// create by Huangqin 
import md5 from 'js-md5';
// 定义Api接口
const baseUrl = 'http://nf53na.natappfree.cc/prms'; //基本路径
const assetsPath = '/api'
const Api  = {};

const ApiMap = {
    login: {
        url: '/associator/weChatAppletLogin.json',
        method: 'POST'
    },
    // 康复知识信息列表
    getForumKnowledgeList: {
        url: '/knowledge/getForumKnowledgeList.json',
        method: 'GET'
    }
}


for (let key in ApiMap) {
    Api[key] = (obj) => {
        return new Promise((resolve, reject) => {
            wx.request({
                url: `${baseUrl}${assetsPath}${ApiMap[key].url}`,
                method: ApiMap[key].method,
                dataType: 'json',
                data:obj,
                header: {
                    ContentMD5: transForm(obj),
                    'content-type': 'application/x-www-form-urlencoded' 
                },
                success: (res) => {
                    resolve(res)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })       
    }
}

function transForm(obj) {
	let str = '';
	let arr = [];
	for(let item in obj) {
		arr.push(item + "=" + obj[item]);
	}
	arr.sort();
	for(var i = 0; i < arr.length; i++) {
		if(i == 0) {
			str += arr[i];
		} else {
			str += "&" + arr[i];
		}
	}
	return md5(str).toUpperCase();
}

export default Api