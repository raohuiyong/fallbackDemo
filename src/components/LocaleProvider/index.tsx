import React from 'react';
import { ConfigProvider } from '@alifd/next';


interface Props {
  children: React.ReactElement;
}

function LocaleProvider(props: Props) {
  const { children } = props;


  return (
      <ConfigProvider>
        {React.Children.only(children)}
      </ConfigProvider>
  );
}

export default LocaleProvider;