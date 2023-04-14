import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const { userName, setUserName } = useModel('test', (model) => {
    return {
      userName: model.testName,
      setUserName: model.setTestName
    }
  });

  useEffect(() => {
    setUserName('这是测试2');
  }, [])
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        { userName }
      </div>
    </PageContainer>
  );
};

export default HomePage;
