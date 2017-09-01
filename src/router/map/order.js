import layout from '../../components/common/layout/layout'
const orderDetails = r => require.ensure([], () => r(require('../../page/order/orderDetails.vue')), 'order')
const confirmOrder = r => require.ensure([], () => r(require('../../page/order/confirmOrder.vue')), 'order')
const mailAddress = r => require.ensure([], () => r(require('../../page/order/mailAddress.vue')), 'order')
const payOrder = r => require.ensure([], () => r(require('../../page/order/payOrder.vue')), 'order')
const paySuccess = r => require.ensure([], () => r(require('../../page/order/paySuccess.vue')), 'order')
const selectCoupon = r => require.ensure([], () => r(require('../../page/order/selectCoupon.vue')), 'order')

export default {
    name: '订单',
    path: '/order',
    component: layout,
    children: [{
            name: '确认订单',
            path: '/order/confirmOrder',
            component: confirmOrder
        },
        {
            name: '订单详情',
            path: '/order/orderDetails',
            component: orderDetails
        }

    ]
}