// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/home","name":"首页","icon":"AlignLeftOutlined","parentId":"ant-design-pro-layout","id":"1"},"2":{"path":"/home/list","name":"首页列表","parentId":"1","id":"2"},"3":{"path":"","parentId":"ant-design-pro-layout","id":"3"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__Home__index" */'@/pages/Home/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Home__index" */'@/pages/Home/index.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/liaoxinjian/Documents/学习/魔鬼训练营/interview-backstage/src/.umi/plugin-layout/Layout.tsx')),
},
  };
}
