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
        conn = dataBase.conn_postgre_db('10.199.127.124', 'r_wh', 'r_wh123', 'haieredw', '5432')
        list = dataBase.query_data_df(conn, '''
                                                select sum(ndevcnt_addinstall_1d )as "昨日网器安装量",
                                                sum(ndevcnt_addinstall_curm )as"本月网器安装量",
                                                sum(ndevcnt_addinstall_cury )as "年累计网器安装量",
                                                sum(ndevcnt_install_total ) as "历史累计网器安装量"
                                                from u_ads_wh.v_t88_install_dev_sta 
                                                where statistics_dt =(select max(statistics_dt ) from u_ads_wh.v_t88_install_dev_sta)
                                                '''
                                      )
        counter = {}  # 生成词典的方式1
        # dict_a=dict()生成词典的方式2
        # a=list.loc[0, 'macid']
        # b=list.loc[0, 'useGasL']
        # iterrows/itertuples/zip
        for index, row in list.iterrows():
            day_value = row['昨日网器安装量']
            month_value=row['本月网器安装量']
            year_value=row['年累计网器安装量']
            history_value=row['历史累计网器安装量']
            counter['day_value'] = day_value
            counter['month_value'] = month_value
            counter['year_value'] = year_value
            counter['history_value'] = history_value
        return counter


class SourceTotalData(TotalData):
    def __init__(self):
        """
        按照 SourceTotalData 的格式覆盖数据即可
        """
        super().__init__()
        self.title = '电热水器耗材大屏数据展示'
