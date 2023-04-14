import { defineConfig } from '@umijs/max';
import routes from './routes/index'
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'interview',
  },
  routes,
  npmClient: 'yarn',
});

