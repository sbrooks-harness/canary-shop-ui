import Link from "next/link";
import { Card, Image } from "semantic-ui-react";
import classes from "./blog.module.css";

const BlogCard = (props) => {
  const linkPath = `/blog/${props.id}`;

  return (
    <Link href={linkPath}>
      <Card fluid color="green" className={classes.card}>
        <div className={classes.blogCard}>
          <Image floated="left" size="small" src="images/forest.jpg" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
