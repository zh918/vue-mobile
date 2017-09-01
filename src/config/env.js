// 环境配置

export default class AppConfig {
	static config = {
		flag:{
			log:true,    			// 常规输出
			error:true   			// 错误日志输出
		},  

		appID:null,					 
		name:null,					 
		code:null,					 
		bizProxyUrl:null, 
		resourceProxyUrl:null, 
		commonProxyUrl: null, 
		 


	}

	/**
	 * @描述    设置app配置信息，可全局使用
	 * @开发    zh
	 * @时间    2017-07-27
	 * @param {[type]}   config = {}
	 */
	static setAppConfig(...config) {
		// AppConfig.config = {};
		log(config);
		
		let configArray = [...config];
		configArray.forEach((c)=>{
			Object.assign(AppConfig.config,c);
		});  
	}

	/**
	 * @描述    配置全局开关信息
	 * @开发    英文
	 * @时间    2017-07-27
	 * @param {[type]}   flag {log:true,error:true,...}
	 */
	static setFlag(flag={}) {
		Object.assign(AppConfig.config.flag,flag);
	}

}
 
if (typeof window.$AppConfig == "undefined") window.$AppConfig = AppConfig;
 
