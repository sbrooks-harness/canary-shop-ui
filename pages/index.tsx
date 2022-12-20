import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Container, Grid, Header, Segment } from "semantic-ui-react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Carousel
        className="carousel"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        stopOnHover={false}
      >
        <div>
          <img src="images/platform-illustration2x.png" />
        </div>
        <div>
          <img src="images/carousel-code.png" />
        </div>
      </Carousel>
      <Container className="textBlock textPadding">
        <p>
          Spicy jalapeno bacon ipsum dolor amet corned beef shoulder ball tip
          bresaola ham turducken. Chuck jowl venison shankle leberkas hamburger
          sirloin rump t-bone. Brisket prosciutto pork loin shoulder drumstick
          rump hamburger, jowl doner burgdoggen jerky boudin buffalo. Jowl doner
          tenderloin short loin shank fatback ham hock cupim spare ribs ground
          round burgdoggen shoulder frankfurter. Ground round tail ham fatback,
          salami drumstick beef tenderloin kielbasa meatball. Turkey beef ribs
          jowl shankle, sirloin ham ribeye tri-tip. Ham meatloaf pork belly
          spare ribs ball tip.
        </p>
        <p>
          Pancetta meatball ham capicola brisket chislic turducken short loin
          flank. Beef ribs capicola boudin, ham hock porchetta pork belly
          pastrami. Landjaeger pork salami burgdoggen chicken cupim. Ball tip
          venison chislic, chicken cow pancetta cupim. Strip steak shank jerky,
          cupim andouille ball tip pancetta pastrami short loin tongue biltong
          shoulder. Shankle pork chicken buffalo capicola kielbasa, short ribs
          ham hock spare ribs sausage hamburger filet mignon drumstick. Rump
          ground round shoulder ham shank porchetta.
        </p>
        <p>
          Alcatra tri-tip biltong flank capicola ham hock shankle andouille
          jowl. T-bone short loin venison flank picanha tongue salami short ribs
          pastrami shankle drumstick buffalo fatback sausage. Flank beef ribs
          pork chop short loin swine, pork loin cow corned beef chuck. Ham hock
          ribeye ball tip ham. Tail venison tongue sausage sirloin buffalo
          meatball kielbasa pork chop shankle pork prosciutto corned beef ham
          hock. Tri-tip pastrami ball tip spare ribs tenderloin drumstick turkey
          filet mignon t-bone capicola jerky chicken shank beef ribs doner.
          Meatloaf kielbasa ham hock, t-bone shankle sirloin turkey pork loin.
        </p>
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  That is what they all say about us
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <Image
                    alt="PhotoGoesHere"
                    src="/images/harness-logo.png"
                    width={50}
                    height={50}
                  />
                  <b>Ray Finkle,</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </Fragment>
  );
}
