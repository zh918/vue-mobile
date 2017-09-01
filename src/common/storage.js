// 存储
import Cookie from 'js-cookie'

const clear = () => {
	let obj = Cookie.get();
	for(let c in obj){
		if (obj.hasOwnProperty(c)){
			Cookie.remove(c);
		}
	} 
}

// export const injectCookie = () => {
// 	if (typeof window.Cookie == 'undefined'){
// 		window.Cookie = Cookie;
// 	}

// 	if (typeof window.Cookie.clear == 'undefined'){
// 		window.Cookie.clear = clear;
// 	}
// } 
// 


if (typeof window.Cookie == 'undefined'){
	window.Cookie = Cookie;
}

if (typeof window.Cookie.clear == 'undefined'){
	window.Cookie.clear = clear;
}