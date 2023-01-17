import { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import { classicNameResolver } from "typescript";
import ProductCard from "../../components/ui/ProductCard";
import productList from "../../dummy-data/productList.js";
import { Product } from "../../type/index";

interface ProductList {
  preppedProducts: Product[];
}

const ShopPage: React.FC<ProductList> = (props) => {
  useEffect(() => {
    console.log("props", props);
  }, [props]);

  return (
    <Container>
      <center>
        <h1 className="pageTitle">Automation Library</h1>
      </center>
      <Grid columns={3}>
        <Grid.Row>
          {props.preppedProducts.map((item) => (
            <ProductCard
              id={item.id}
              key={`product-item-${item.id + Math.floor(Math.random()) * 60}`}
              imgSrc="images/terraform-logo.webp"
              title={item.title}
              description={item.description}
              brand={item.brand}
              category={item.category}
              price={item.price}
            />
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
