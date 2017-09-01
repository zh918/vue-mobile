/**
 * js调用客户端能力中间件
 * zh
 */
export default class ClientBridge {

	/**
	 * @描述     watermark(水印):图片加水印，默认就在图片右下角，白色字体，sourceType为camera才有效
	 * @开发     英文
	 * @时间     2017-07-18
	 * @param  {[type]}   type      album相册,camera相机
	 * @param  {[type]}   watermark [description]
	 * @param  {[type]}   success   [description]
	 * @param  {[type]}   fail      [description]
	 * @return {[type]}             [description]
	 */
	static getPicture (type,watermark,success,fail) {
		Easymi.media.getPicture({
				sourceType: type,
				destinationType: "all",
				quality: 30,
				targetWidth: 600,
				targetHeight: 450,
				encodingType: "jpeg",
				watermark: watermark ? watermark : ""
			}, function(imageFileOSPath, imageURI, imageData) {
				success && success(imageFileOSPath, imageURI, imageData);
			},
			function(errCode, errMsg) {
				console.log(errCode, errmsg);
				fail && fail(errCode, errmsg)
			})
	}


	/**
	 * @描述     方法说明
	 * @开发     英文
	 * @时间     2017-07-18
	 * @param  {[type]}   imageFileOSPath [description]
	 * @param  {[type]}   success         [description]
	 * @param  {[type]}   fail            [description]
	 * @return {[type]}                   [description]
	 */ 

    static uploadResource(imageFileOSPath, success, fail) { 
		new Easymi.proxy.Upload($AppConfig.config.resourceProxyUrl, imageFileOSPath,
			function(progess, groupName, remoteFileName) { 
				success && success(progess, groupName, remoteFileName);
				return true;
			},
			function(errCode, errMsg) {
				log('上传至服务器失败', errCode, errmsg);
				fail && fail(errCode, errmsg)
				return false;
			}).start(true);
	}

    /**
     * @描述     方法说明
     * @开发     英文
     * @时间     2017-07-18
     * @param  {[type]}   payInfo [description]
     * @param  {[type]}   success [description]
     * @param  {[type]}   fail    [description]
     * @return {[type]}           [description]
     */
    static pay(payInfo, success, fail) {
        log("支付信息", payInfo)
        //2016-11-01 18:11:11转化为20161101181111
        //  var time = payInfo.lastPayDateTime.replace(" ", ":").replace(/\:/g, "-").split("-").join('');
        //  log("time==" + time)

        Easymi.pay.payRequest({
                order_no: payInfo.payOrderNumber,
                channel: payInfo.channel, 
                /*subject: payInfo.goodsName,
                body: payInfo.goodsName,
                timeExpire: time,
                clientIP: "192.168.0.1 ",
                totalFee: 1, //payInfo.totalFee * 100,
                encrypt: "2",*/
            }, function() {
                log('支付成功' + arguments);
                success && success();
            },
            function(errCode, errMsg) {
                log("支付失败" + arguments);
                fail && fail(errCode, errMsg)
            });
    }

	/**
	 * @描述     退出应用
	 * @开发     英文
	 * @时间     2017-07-18
	 * @return {[type]}   [description]
	 */
	static exitApp () {
		log($AppConfig.config.appID,$AppConfig.config.appScene)
		window.Was && Easymi.app.exit({
			appID: $AppConfig.config.appID,
			sceneType: $AppConfig.config.appScene
		});
	}

	/**
	 * @描述     全屏
	 * @开发     英文
	 * @时间     2017-07-18
	 * @return {[type]}   [description]
	 */
	static fullScreenApp () {
		window.Was && Easymi.app.fullScreenApp({
			appID: $AppConfig.config.appID,
			sceneType: $AppConfig.config.appScene
		});
	}

	/**
	 * @描述     方法说明
	 * @开发     英文
	 * @时间     2017-07-18
	 * @return {[type]}   [description]
	 */
	static restoreApp () {
		window.Was && Easymi.app.restoreApp({
			appID: Was.appInfo.appID,
			sceneType: $AppConfig.config.appScene
		}); 
	}
	
	/**
	 * @描述     返回首页并刷新
	 * @开发     英文
	 * @时间     2017-07-18
	 * @return {[type]}   [description]
	 */
	static goHome () {
			window.Was && Easymi.app.goHome({
				appID: $AppConfig.config.appID,
				sceneType: $AppConfig.config.appScene
			});
	}
	
	/**
	 * @描述     用户信息
	 * @开发     英文
	 * @时间     2017-07-18
	 * @param  {[type]}   success [description]
	 * @param  {[type]}   fail    [description]
	 * @return {[type]}           [description]
	 */
	static getUserInfo () {
		let userInfo = {};
		if($isOnLine) {
			userInfo = Easymi.app.getUserInfo();

		} else {
			userInfo = {
				userID : '23',
				userToken : '175AABD794D20E08B39916E80FABD9D314042E7B4A406B87E03F6F377230FD68'
			}
		}
		
		return userInfo;
	}
	
	/**
	 * @描述     应用信息
	 * @开发     英文
	 * @时间     2017-07-18
	 * @param  {[type]}   success [description]
	 * @param  {[type]}   fail    [description]
	 * @return {[type]}           [description]
	 */
	static getAppInfo(success,fail) {
		Easymi.app.getAppInfo({
				appID: Was.appInfo.appID,
			},function(data) {
			console.log('getAppInfo====' + JSON.stringify(data, null, 2));
			success && success(data);
			}, function(errCode, errMsg) {
			fail && fail(errCode, errmsg)
		});
	}

	/**
	 * @描述    方法说明
	 * @开发    英文
	 * @时间    2017-08-14
	 * @param {[type]}   option {
					carID: data.data.car.carID,
					carLicense:data.data.car.carLicense
				}
	 */
	static setCurrentCar(option) {
		log('setCurrentCar',option);
		Easymi.car.setCurrentCar(option);
	}

	/**
	 * @描述     获取网络状态
	 * @开发     英文
	 * @时间     2017-08-24
	 * @return {Boolean}  [true:有网络，false:无网络]
	 */
	static hasNetwork() { 
		return Easymi.app.getNetState() == 1;
	}

}

if (typeof window.$ClientBridge == "undefined") window.$ClientBridge = ClientBridge;

