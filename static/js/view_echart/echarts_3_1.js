$(function echarts_31() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('fb1'));
    option = {
	    title: [{
        text: '{{form.echarts3_1.title}}',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }
    }],
    tooltip: {                                  // 鼠标放上去之后浮标的设置选项
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",  // 标题，内容：数值%
        position:function(p){                   //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];          // 横坐标往上，纵坐标往右，便于观看
        }
    },
    legend: {
        top:'70%',
        itemWidth: 10,
        itemHeight: 10,
        data:[],
        textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize:'12',
        }
    },
    series: [
        {
        	name:'{{form.echarts3_1.title}}',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],
            label: {show:false},
			labelLine: {show:false},
            data:[]
        }
    ]
};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})
