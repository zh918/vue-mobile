/**
 * 前端自定义code编码段位：8000-9000
 * 后端codes编码与api保持一致
 * @type {Array}
 */ 
const messages = [
		{
        	code: 9999,  
        	codes: [],
        	msg: "当前网络不可用，请检查网络设置" // 前端解析消息
	    },
		{
        	code: 8000, // 该code为前端自定义编码，仅提供给特定情况下直接输出message，也与后台api进行区分
        	codes: [],
        	msg: "请上传行驶证照片" // 前端解析消息
	    },
	    {
	        code: 8001,
	        codes: [],
	        msg: "请输入行驶城市"
	    },
	    {
	        code: 8002,
	        codes: [],
	        msg: "请输入车主姓名"
	    },
	    {
	        code: 8003,
	        codes: [],
	        msg: "请输入正确的车主姓名"
	    },
	    {
	        code: 8004,
	        codes: [],
	        msg: "请输入车主身份证号"
	    },
	    {
	        code: 8005,
	        codes: [],
	        msg: "请输入正确的车主身份证号"
	    },
	    {
	        code: 8006,
	        codes: [],
	        msg: "请输入车牌号"
	    },
	    {
	        code: 8007,
	        codes: [],
	        msg: "请输入正确的车牌号"
	    },
	    // {
	    //     code: 8008,
	    //     codes: ["g5_2001", "business_2001"],
	    //     msg:"asdf"
	    // },
	    {
	        code: 8009,
	        codes: ["g5_2012", "business_2012"],
	        msg: "您选择的行驶城市未开通产品的购买，请重新选择行驶城市 。"
	    },
	    {
	        code: 8010,
	        codes: ["business_2004", "business_2506"],
	        msg: "商品已下架" // 前端解析消息
	    },
	    {
	        code: 8011,
	        codes: ["business_2501"],
	        msg: "您是黑名单用户，不能购买"
	    }, {
	        code: 8012,
	        codes: ["business_2509"],
	        msg: "保险公司停止接单了，本订单目前无法确认，请在工作时间段内重新询价。"
	    }, 
		// 差异消息处理
		{
			// code:8007, 
			codes:["g5_2012","business_2012","business_2505"], 
			msg:"您选择的行驶城市未开通产品的购买，请重新选择行驶城市 。"  
		},
		{ 
			codes:[11,12,13,14,15,16,17,18,19], 
			msg:"系统体力不支倒下啦，狠狠的抽醒他吧！"  
		}

]

/**
 * 前端解析code输出message
 */
export default class MessageHelper {
    /**
     * @描述     根据api返回结果来输出message，该message可能与api返回msg不一致，以前端定义message为准
     * @开发     zh
     * @时间     2017-08-03
     * @param  {[type]}   result [description]
     * @return {[type]}          [description]
     */
    static toMsg(result, defaultVal) {
        log("MessageHelper====", result);
        if(typeof result == "number") {
            let msgObj = messages.find(m => m.code == result);
            log(msgObj)
            if(msgObj) {
                return msgObj.msg;
            } else {
                return "系统异常";
            }
        } else if(typeof result == "undefined") {
            return "系统异常";
        } else {
            let msgObj = messages.find(m => m.codes.some(c => c == result.errorCode));
            if(msgObj && msgObj.msg) {
                return msgObj.msg;
            }

            return result.errorMsg;
        }
    } 

}

if(typeof window.$MessageHelper == "undefined") window.$MessageHelper = MessageHelper;