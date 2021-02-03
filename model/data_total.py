#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2021/02/03 14:48
# @Author : qianyiming
# @Site : 
# @Describe:对总体统计数据进行处理，不涉及图表

from model import dataBase


class TotalData:
    def __init__(self):
        # 默认的标题
        self.title = '大数据可视化展板通用模板'
        # 两个小的form看板
        self.counter = self.get_counter()
        self.counter2 = self.get_counter()

    # 需要安装这个包：cryptography
    def get_counter(self):
        conn = dataBase.conn_db('127.0.0.1', 'root', 'root', 'test')
        list = dataBase.query_data_df(conn, 'SELECT macid,useGasL FROM test.m7x LIMIT 1')
        counter = {}  # 生成词典的方式1
        # dict_a=dict()生成词典的方式2
        # a=list.loc[0, 'macid']
        # b=list.loc[0, 'useGasL']
        # iterrows/itertuples/zip
        for index, row in list.iterrows():
            name = row['macid']
            value = row['useGasL']
            counter['name'] = name
            counter['value'] = value
        return counter


class SourceTotalData(TotalData):
    def __init__(self):
        """
        按照 SourceTotalData 的格式覆盖数据即可
        """
        super().__init__()
        self.title = '电热水器耗材大屏数据展示'
