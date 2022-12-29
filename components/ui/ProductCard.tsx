import Link from "next/link";
import { useContext } from "react";
import { Button, Card, Container, Icon, Image } from "semantic-ui-react";
import classes from "./ProductCard.module.css";
import CartList from "../../contexts/cart-context";

const ProductCard = (props: any) => {
  const { id, title, description, price, brand, category, imgSrc } = props;
  const link = `/products/${id}`;
  const cartCtx = useContext(CartList);

  const cartAddHandler = () => {
    cartCtx.addCartItem(id);
  };

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
              <Button onClick={cartAddHandler}>Add to Cart</Button>
            </center>
          </Card.Content>
        </Card>
      </Container>
    // </Link>
  );
};

export default ProductCard;
