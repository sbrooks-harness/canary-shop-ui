import classes from "./Footer.module.css";

import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ marginTop: "auto", padding: "5em 0em" }}
      className={classes.footer}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Company" />
            <List link inverted>
              <List.Item as="a">About</List.Item>
              <List.Item as="a">Press & News</List.Item>
              <List.Item as="a">Contact HQ</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Resources" />
            <List link inverted>
              <List.Item as="a">Documentation</List.Item>
              <List.Item as="a">FAQ</List.Item>
              <List.Item as="a">Blog</List.Item>
              <List.Item as="a">Community</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header inverted as="h4" content="Canary Shop - by Harness" />
            <Icon name="github" size="big" />
            <Icon name="linkedin" size="big" />
            <Icon name="facebook" size="big" />
            <Icon name="twitter" size="big" />
            <Icon name="instagram" size="big" />
            <p></p>
            <p>Ⓒ 2022 Harness Inc.</p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size="mini" src="/images/harness-logo.png" />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
