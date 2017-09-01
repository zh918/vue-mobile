
/**
 * 校验车主姓名
 */
export function checkCarName(name) {

    return /[^a-zA-Z\_\s\u4e00-\u9fa5]/ig.test(name);

}

/**
 * 校验车主身份证号
 */

export function checkCarID(cardID) {

    return !(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cardID));

}


/**
 *校验车牌号
 */

export function checkcarLicense(carLicense) {

    // return /^[A-Za-z0-9]{5,6}$/g.test(carLicense);
    return /^[A-Z]{1}[A-Za-z0-9]{5,6}$/g.test(carLicense);
}

