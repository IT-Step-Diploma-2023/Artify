import { FunctionComponent, ReactNode } from 'react';
interface PageContentProps {
  title: string;
  children: ReactNode;
}

const PageContent: FunctionComponent<PageContentProps> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
