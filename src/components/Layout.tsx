import MyDrawer from "./MyDrawer";

type LayoutProps = {
  children: any;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <MyDrawer>
      <div className={`flex flex-wrap flex-row justify-around w-full gap-10 bg-[#1d267d] text-white`}>
        {children}
      </div>
    </MyDrawer>
  );
}
