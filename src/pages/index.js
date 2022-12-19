import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import KeyEvent from "sections/key-event";
import CoreEvent from "sections/core-event";
import Event from "sections/isoevents";
import PartnerSection from "sections/partner";
import WorkFlow from "sections/workflow";
import AppointmentCard from "sections/appointment";
import SecurePayment from "sections/secure-payment";
import Package from "sections/package";
import Faq from "sections/faq";
import OurTeam from "sections/ourteam";
import Feedback from "sections/feedback";
import Newsletter from "sections/newsletter";
import GarbaDJEvent from "sections/garbadjevent";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="ISO-SJSU" />
          <Banner />
          <GarbaDJEvent />
          <KeyEvent />
          <CoreEvent />
          <Event />
          {/* <PartnerSection /> */}
          <WorkFlow />
          {/* <AppointmentCard /> */}
          {/* <SecurePayment /> */}
          {/* <Package /> */}
          <OurTeam />
          {/* <Newsletter/> */}
          <Feedback />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
