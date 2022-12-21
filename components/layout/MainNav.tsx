import { isPropertySignature } from "typescript";
import Link from "next/link";
import { useFeatureFlag } from "@harnessio/ff-react-client-sdk";
import { Dropdown, Icon, Image, Input, Menu } from "semantic-ui-react";
import classes from "./MainNav.module.css";

const MainNav = (props: any) => {
  const myFlag = useFeatureFlag("CANARY_SHOP_TACO_MENU_ENABLED");
  console.log("Feature Flag: " + myFlag);

  const accountTrigger = (
    <Icon name="user outline" size="large" className={classes.menuIcon} />
  );

  const cartTrigger = <Icon name="shopping cart" size="large" />;

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item>
          <Image ui size="mini" src="/images/harness-logo.png"></Image>
        </Menu.Item>
        <Menu.Item
          name="home"
          className="textBlock"
          as={Link}
          href="/"
          //   active={activeItem === "home"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Shop"
          className="textBlock"
          as={Link}
          href="/products"
          //   active={activeItem === "messages"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="blog"
          className="textBlock"
          as={Link}
          href="/blog"
          //   active={activeItem === "friends"}
          //   onClick={this.handleItemClick}
        />
        {myFlag ? (
          <Menu.Item
            name="Tacos"
            className="textBlock"
            as={Link}
            href="/tacos"
          />
        ) : (
          <></>
        )}
        <Menu.Menu position="right">
          <Menu.Item className="menuItem">
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item className={classes.menuIcon}>
            <Dropdown item trigger={cartTrigger}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/cart">
                  Go to cart
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/checkout">
                  Checkout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item className={classes.menuIcon}>
            <Dropdown item trigger={accountTrigger}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/profile">
                  Account
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/settings">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/logout">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MainNav;
