import { Container, Grid } from "semantic-ui-react";
import { classicNameResolver } from "typescript";
import ProductCard from "../components/ui/ProductCard";
import productList from "../dummy-data/productList.js";

const ShopPage = (props: any) => {
  return (
    <Container>
      <center>
        <h1 className="pageTitle">Shop Our Products</h1>
      </center>
      <Grid columns={3}>
        <Grid.Row>
          {props.preppedProducts.map((item: any) => (
            <Grid.Column>
              <ProductCard
                key={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
                brand={item.brand}
                category={item.category}
                price={item.price}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export async function getServerSideProps() {
  const preppedProducts = productList.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    brand: product.brand,
    category: product.category,
    imgSrc: product.thumbnail,
  }));

  return {
    props: {
      preppedProducts,
    },
  };
}

export default ShopPage;
