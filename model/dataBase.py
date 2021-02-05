#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2021/02/03 14:48
# @Author : qianyiming
# @Site :
# @Describe:
import pymysql
import psycopg2
import pandas as pd


# 连接mysql数据库
def conn_db(host, username, password, database):
    conn = pymysql.connect(host=host, user=username, password=password, db=database, charset="utf8")
    return conn

#连接postgresql数据库
def conn_postgre_db(host, username, password, database,port):
    conn = psycopg2.connect(database=database, user=username, password=password, host=host, port=port)
    return conn


# 查询数据通过元组
def query_data_tuple(conn, sql, n):
    cursor = conn.cursor()
    cursor.execute(sql)
    if n == 'a':
        row = cursor.fetchall()  # 获取所有的数据
    elif n == 'o':
        row = cursor.fetchone()  # 获取第一行数据
    else:
        row = cursor.fetchmany(n)  # 获取指定行的数据
    conn.commit()
    cursor.close()
    conn.close()
    return row


# 查询数据通过dataframe
def query_data_df(conn, sql):
    df = pd.read_sql(sql, conn)
    conn.close()
    return df
