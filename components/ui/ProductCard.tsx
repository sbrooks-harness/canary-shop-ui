import Link from "next/link";
import { Card, Container, Icon, Image } from "semantic-ui-react";
import classes from "./ProductCard.module.css";

const ProductCard = (props: any) => {
  const link = `/products/${props.companyId}`;
  const { id, title, description, price, brand, category, imgSrc } = props;

  return (
    <Link href={link}>
      <Container>
        <Card className={classes.card}>
          <Image
            className={classes.productImage}
            size="big"
            src={imgSrc}
            wrapped
            fluid
            ui={true}
          />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
              <div>{props.description}</div>
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
          </Card.Content>
        </Card>
      </Container>
    </Link>
  );
};

export default ProductCard;
