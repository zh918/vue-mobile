import carLogic from './server/carLogic'
import quote from './server/quoteStatus'

export default class DispatchRouter {
    config = {}

    constructor() {

    }

    dispatch() { 

        if(!$isOnLine) {
            // 本地网页调试 
        } else {
            // 正式环境
             
        }
    } 

    /**
     * @描述     url参数转换为对象
     * @开发     zh
     * @时间     2017-07-24
     * @param  {[type]}   pamrs [description]
     * @return {[type]}         [description]
     */
    _parmsToObj(pamrs) {
        let obj = {};

        if(pamrs.length < 2) return obj;

        let parmArray = pamrs[1].split('&');

        parmArray.forEach((p) => {
            let pArray = p.split('=');
            obj[pArray[0]] = pArray[1];
        });
        return obj;
    }
}