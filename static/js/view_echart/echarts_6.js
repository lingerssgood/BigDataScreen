$(function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));
    var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		data: {{form.echart6.xAxis|safe}},
		textStyle: {
            color: 'rgba(255,255,255,.6)',
        }
	},
	series: [
{% for item in form.echart6.data %}
		{
		name: '{{item.name|safe}}',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: {{item.radius|safe}},
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: {{item.value}},
			name: '{{item.color}}'
		}, {
			value: {{item.value2}},
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	    },
{% endfor %}
	]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize",function(){
    myChart.resize();
});
})