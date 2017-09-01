// 使用部分相关页面
import Vue from 'vue'
import Router from 'vue-router' 
import photo from './useMap/photo' 

export default new Router({
	mode:'history',
	routes:[ 
		photo
	]
})