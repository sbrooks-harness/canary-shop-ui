import { useRouter } from "next/router";
import { Container } from "semantic-ui-react";
import { isPropertySignature } from "typescript";
import { getBlogArticleById } from "../../dummy-data/blogList";

interface BlogPageProps {
  one: string;
  two: string;
}

const BlogPage = (props: BlogPageProps) => {
  const router = useRouter();
  const articleID = router.query.id;
  //   const article = getBlogArticleById(articleID);
  //   console.log(article);

  return (
    <Container>
      {/* <p>Output: {JSON.stringify(article)}</p> */}
      <p>Article ID: {articleID}</p>
      <p>From Props: {props.one}</p>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const articleID = params.id;
  const article = getBlogArticleById(articleID);

  return {
    props: {
      one: "one",
      two: "two",
    },
  };
}

export default BlogPage;
