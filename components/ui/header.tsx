"use client";

import {
  Avatar,
  Input,
  ListItemStandard,
  ShellBar,
  ShellBarItem,
} from "@ui5/webcomponents-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkComponent from "./link";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ShellBar
      logo={
        <Image
          width={86}
          height={32}
          alt="SAP Logo"
          src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
        />
      }
      menuItems={
        <>
          <ListItemStandard data-key="home-page">
            <LinkComponent href={"/"}>Home</LinkComponent>
          </ListItemStandard>
          <ListItemStandard data-key="items-page">
            <LinkComponent href={"/items"}>Items</LinkComponent>
          </ListItemStandard>
        </>
      }
      // notificationsCount="10"
      showProductSwitch={false}
      onLogoClick={function ks() {}}
      onMenuItemClick={function ks() {}}
      onNotificationsClick={function ks() {}}
      onProductSwitchClick={function ks() {}}
      onProfileClick={function ks() {}}
      onSearchButtonClick={function ks() {}}
      primaryTitle={
        pathname === "/"
          ? "Home"
          : pathname[1].toLocaleLowerCase() + pathname.slice(2)
      }
      profile={
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
        </Avatar>
      }
      searchField={<Input showClearIcon />}
      // secondaryTitle="Secondary Title"
      showNotifications
    >
      <ShellBarItem icon="add" text="ShellBarItem" />
    </ShellBar>
  );
};

export default Header;
