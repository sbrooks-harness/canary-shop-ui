import Link from "next/link";
import { Card, Container, Icon, Image } from "semantic-ui-react";
import classes from "./ProductCard.module.css";

const ProductCard = (props: any) => {
  const link = `/customers/${props.companyId}`;

  return (
    <Link href={link}>
      <Container>
        <Card className={classes.card}>
          <Image src="/images/harness-logo.png" wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.companyName}</Card.Header>
            <Card.Meta>
              <span className="date">Customer Since: {props.joinDate}</span>
            </Card.Meta>
            <Card.Description>
              <p>
                <span className={classes.cardKey}>CSM:</span> {props.primaryCSM}
              </p>
              <p>
                <span className={classes.cardKey}>SA:</span> {props.primarySA}
              </p>
              <p>
                <span className={classes.cardKey}>SE:</span> {props.primarySE}
              </p>
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    </Link>
  );
};

export default ProductCard;
