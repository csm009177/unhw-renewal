
interface ChildrenProps {
  children: React.ReactNode;
}
/**
 * 레이아웃 컴포넌트
 * @param children 자식 요소
 */
export default function Layout({ children }: ChildrenProps): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
