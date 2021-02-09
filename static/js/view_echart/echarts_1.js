$(function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    $.ajax({
        type: "GET",
        url: "get_echart_1",
        dataType: "json",
        success: function (data) {
            myChart.hideLoading();
            $("#huan").html(data.title);//赋值方式
            myChart.setOption({
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                series: [{
                    name: 'Pressure',
                    type: 'gauge',
                    progress: {
                        show: true
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value}'
                    },
                    data: [{
                        value: data.value,
                        name: data.name
                    }]
                }]
            });
            //      window.addEventListener("resize",function(){
            //      myChart.resize();
            //      });
        }
    });
});