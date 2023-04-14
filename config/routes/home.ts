const Home:Partial<CONVENTION.ROUTE> = {
  path: '/home',
  name: '首页',
  icon: 'AlignLeftOutlined',
  routes: [
    {
      path: '/home/list',
      name: '首页列表',
      component: './Home/index',
    }
  ]
} 
export default Home;