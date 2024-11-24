import Filter from "@/components/items/filter";

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div>
      <Filter />
      {children}
    </div>
  );
};

export default Layout;
