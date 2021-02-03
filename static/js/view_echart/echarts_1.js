$(function echarts_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    option = {
    backgroundColor: '#00265f',     // 这个背景颜色是不透明的
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
        top: '0%',
		//top:'10px',
        right: '0%',
        bottom: '4%',
        containLabel: true   // 表示坐标轴label标签也是grid图表的一部分
    },
    xAxis: [{
        type: 'category',
        data: [],
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: { show: false,},
		axisLabel:  {
                interval: 0,
                rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',},
                },}
                ],

    yAxis: [{
        type: 'value',
        axisLabel: {
        show:true,
         textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
		name:'测试',
        type: 'bar',
        data: [],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
	]
};
   myChart.setOption(option);
   $.ajax({
            type:"GET",
            url:"get_echart_1",
            dataType:"json",
            success:function (data){
                myChart.hideLoading();
//                option.xAxis[0].data=data['xAxis'];
//                option.series[0].data=data['series'];
                 myChart.setOption({
                xAxis: {
                   data: data['xAxis']
                        },
               series: [{
                 name:'测试',
                 data: data['series']
                }]
            });
                 window.addEventListener("resize",function(){
             myChart.resize();
     });
                }
       });
 });