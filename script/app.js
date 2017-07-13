/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @description {}
 */
require.config({
    paths: {
        "zepto": "lib/zepto/1.2.0/zepto.min",
        "vue": "lib/vue/2.2.0/vue.min",
        "api": "plugins/apicloud/1.0.0/api",
        "echarts": "plugins/echarts/3.5.2/echarts.min",
        "date": "lib/utils/date/1.0.0/date",
        "common":"conf/common"
    },
    shim: {
        "api": {
            exports: "$api"
        }
    }
});
