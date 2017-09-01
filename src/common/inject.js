// 全局注入
import './rem'
import '../config/env'
// import '../../lib/clientBridge'
import './polyfill' 
import './messageHelper'
import './log'
import './http'
import './storage'

window.$isOnLineData = true;
window.$isOnLine = true;//process.env.NODE_ENV == 'production';

// export const injectGlobal = () => {
//     injectLog();
// 	injectHttp();
// 	injectCookie();
// }