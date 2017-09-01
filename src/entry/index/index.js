import Vue from 'vue'
import VueRouter from 'vue-router' 
import App from '../../App'
import YmtUI from '../../../ref/ymt-ui'
import '../../common/inject'
import router from '../../router'
import store from '../../store'
import filters from '../../filters/index.js' 
import '../../lib/clientBridge' 
import bs from '../../bootstrap'

import '../../style/reset.less'
import '../../style/common.less'
import '../../style/default/root.less'

import '../../../static/iconfont/iconfont.css'
import '../../../ref/ymt-ui/style.css' 

Vue.use(VueRouter);
Vue.use(YmtUI);  

new bs().run(router,store);  
