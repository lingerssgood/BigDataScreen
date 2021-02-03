#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2021/02/03 14:48
# @Author : qianlingling
from flask import Flask, render_template, jsonify
from model.data_total import SourceTotalData
from model.data_echart import EchartData

app = Flask(__name__)


# 加载进入主页
@app.route('/')
def index():
    # 新建一个实例
    data = SourceTotalData()
    # 传入一个实例，和实例的标题
    return render_template('index.html', form=data, title=data.title)


# #异步刷新获取数据
@app.route('/get_echart_1')
def get_echart_1():
    echart = EchartData()
    return jsonify(echart.echart1)


if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=False)
