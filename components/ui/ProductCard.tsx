import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Icon, Image } from "semantic-ui-react";
import classes from "./ProductCard.module.css";
import { Product } from "../../type/index";
import { CartList } from "../../contexts/cart-context";

const ProductCard: React.FC<Product> = (product) => {
  const { id, title, description, price, brand, category, imgSrc, isInCart } =
    product;
  const link = `/products/${id}`;
  const cartCtx = useContext(CartList);

  const [isItemSelected, setItemSelected] = useState<boolean>(false);

  useEffect(() => {

  }, [isItemSelected]);
  // useEffect(() => {
  //   const isCurrItemSelected = !!cartCtx.cartItems.find(
  //     (item) => item.id === id
  //   );
  //   setItemSelected(isCurrItemSelected);
  // }, [cartCtx.cartItems.length]);

  return (
    // <Link href={link}>
    <Container>
      <Card className={classes.card}>
        <Image
          className={classes.productImage}
          size="big"
          src={imgSrc}
          wrapped
          ui={true}
        />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <div>{description}</div>
          </Card.Meta>
          <Card.Description>
            <p>
              <span className={classes.cardKey}>Brand: {brand}</span>
            </p>
            <p>
              <span className={classes.cardKey}>Category: {category}</span>
            </p>
            <p>
              <span className={classes.cardKey}>Price: ${price}</span>
            </p>
          </Card.Description>
          <center>
            {isInCart ? (
              <Button onClick={() => cartCtx.removeItem(product)}>
                Remove From Cart
              </Button>
            ) : (
              <Button onClick={() => cartCtx.addItem(product)}>
                Add to Cart
              </Button>
            )}
          </center>
        </Card.Content>
      </Card>
    </Container>
    // </Link>
  );
};

export default ProductCard;
