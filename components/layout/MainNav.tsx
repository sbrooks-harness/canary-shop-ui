import { isPropertySignature } from "typescript";
import Link from "next/link";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";
import classes from "./MainNav.module.css";

const MainNav = (props: any) => {
  const accountTrigger = (
    <Icon className={classes.menuIcon} name="user outline" />
  );

  const cartTrigger = <Icon name="shopping cart" />;

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          //   active={activeItem === "home"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          //   active={activeItem === "messages"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          //   active={activeItem === "friends"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item className={classes.menuIcon}>
            <Dropdown item trigger={cartTrigger}>
              <Dropdown.Menu>
                <Dropdown.Item>Go to cart</Dropdown.Item>
                <Dropdown.Item>Checkout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item className={classes.menuIcon}>
            <Dropdown item trigger={accountTrigger}>
              <Dropdown.Menu>
                <Dropdown.Item>Account</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MainNav;
