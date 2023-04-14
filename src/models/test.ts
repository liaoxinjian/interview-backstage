import { useState } from 'react';

const test = () => {
  const [testName, setTestName] = useState<string>('这是测试');

  return {
    testName,
    setTestName
  }
}

export default test;