import Vue from 'vue'
import { appConfig } from './config/env'
import DispatchRouter from './dispatchRouter'
import resetRootFontSize from './common/rem'

export default class Bootstrap {
    constructor() {
        this.dispatchRouter = new DispatchRouter();
    }

    run(router, store) { 
        let _this = this;
        log('bootstrap run 正式环境：', $isOnLine);
        _this.appListener(function() {
            _this.initVue(router, store).then(result => {
                _this.dispatchRouter.dispatch();
            });
        });
    }

    initVue(router, store) {
        return import('./App').then((App) => {
            window.globalVue = new Vue({
                router,
                store,
                template: '<App />',
                components: {
                    App
                }
            }).$mount('#app');
            log("vue 初始化完成");
        });
    }

    appListener(cb) {
        let _this = this;
        $AppConfig.setAppConfig({
            appID: "",
            name: "",
            code: "",
            bizProxyUrl: "",
            resourceProxyUrl: "",
            commonProxyUrl: ""
        });

        _this.dispatchRouter.config = {
            "startType": "1",
            "callArgs": {
                "carID": "1",
                "cityID": "1",
                "appScene": "1",
                "goodsID": "1"
            }
        };

        cb(); 
    }

}