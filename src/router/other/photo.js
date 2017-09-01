// 首页
import layout from '../../components/common/layout/useLayout'
const photoSubmit = r => require.ensure([], () => r(require('../../page/photo/photoSubmit.vue')), 'use')
const photoUpload = r => require.ensure([], () => r(require('../../page/photo/photoUpload.vue')), 'use')

export default {
	name:'照片',
	path:'/photo',
	component:layout,
	children:[
		{
			name:'1234',
			path:'/photo/photoSubmit',
			component:photoSubmit
		},
		{
            name:'1234',
            path:'/photo/photoUpload',
            component:photoUpload
        },
	]
}