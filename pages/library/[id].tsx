import { useRouter } from "next/router";
import { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { getProductById } from "../../dummy-data/productList";

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.id;
  const item = getProductById(productId);
  console.log(item);
  //   const thisProduct = productList.find(
  //     (thing) => JSON.stringify(thing.id) == productId
  //   );
  //   console.log("TEST: " + thisProduct);

  return (
    <Fragment>
      <center>
        <h1 className="pageTitle">Product info for: {productId}</h1>
        <h2>Title: </h2>
      </center>
      <Container>{/* <Image src={product.imgSrc} /> */}</Container>
    </Fragment>
  );
};

// export async function getServerSideProps(context: any) {
//   const { params } = context;
//   const details = getProductById(params.id);
//   console.log("Details: " + details);

//   return {
//     props: {
//       productId: params.id,
//         title: details.title,
//       //   description: params.description,
//       //   price: params.price,
//       //   brand: params.brand,
//       //   category: params.category,
//       //   imgSrc: params.imgSrc,
//     },
//   };
// }

export default ProductPage;
