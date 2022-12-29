import { Card, Container, Image } from "semantic-ui-react";
import BlogCard from "../../components/ui/BlogCard";
import blogList from "../../dummy-data/blogList.js";

const BlogPage = () => {
  return (
    <>
      <center>
        <h1 className="pageTitle">Documentation goes here!!</h1>
      </center>
      <Container>
        {blogList.map((article) => (
          <BlogCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
          />
        ))}
      </Container>
    </>
  );
};

export default BlogPage;
