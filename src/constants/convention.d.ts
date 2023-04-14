declare namespace CONVENTION {
  /**
   * 规定路由
   */
  interface ROUTE {
    path: string,
    component: string,
    name: string,
    icon: string,
    routes: Array<Partial<ROUTE>>
  }
}