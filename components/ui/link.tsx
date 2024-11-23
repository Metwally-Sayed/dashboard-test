import Link from "next/link";
type Props = {
  href: string;
  children: React.ReactNode;
};

const LinkComponent = ({ href, children }: Props): JSX.Element => {
  return (
    <Link style={{ color: "inherit", textDecoration: "none" }} href={href}>
      {children}
    </Link>
  );
};

export default LinkComponent;
