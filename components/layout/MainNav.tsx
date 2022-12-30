import { isPropertySignature } from "typescript";
import Link from "next/link";
import { useFeatureFlag } from "@harnessio/ff-react-client-sdk";
import { Dropdown, Icon, Image, Input, Menu } from "semantic-ui-react";
import classes from "./MainNav.module.css";
import { useContext } from "react";
import CartList from "../../contexts/cart-context";

const MainNav = (props: any) => {
  const myFlag = useFeatureFlag("canary_shop_taco_menu_enabled");
  const cartCtx = useContext(CartList);
  const accountTrigger = (
    <Icon name="user outline" size="large" className={classes.menuIcon} />
  );
  const cartTrigger = (
    <Icon name="shopping cart" size="large">
      <span className={classes.cartBadge}>
        {cartCtx.cartItems.length ? cartCtx.cartItems.length : "0"}
      </span>
    </Icon>
  );

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
          name="Automation Library"
          className="textBlock"
          as={Link}
          href="/library"
          //   active={activeItem === "messages"}
          //   onClick={this.handleItemClick}
        />
        {myFlag ? (
          <Menu.Item
            name="loadGenerator"
            className="textBlock"
            as={Link}
            href="load-generator"
          />
        ) : (
          <></>
        )}
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
        <Menu.Item
          name="Docs"
          className="textBlock"
          as={Link}
          href="/docs"
          //   active={activeItem === "friends"}
          //   onClick={this.handleItemClick}
        />
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
