import MyDrawer from './MyDrawer';

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

export default function Layout({ children }: LayoutProps) {
  return (

    <MyDrawer >
      {children}
    </MyDrawer>
  )
}
