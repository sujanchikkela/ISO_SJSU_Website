/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "How can I solve issues with Duo App Authenticator?",
    contents: (
      <div>
        The best way is to reach out the team on phone during PST hours if you
        are unable to access it.
      </div>
    ),
  },
  {
    title: "What can I expect from a session with Graduate Student Advisor?",
    contents: (
      <div>
        ISO-SJSU is here to help incoming and current students from India in
        terms of Social, Cultural and Academic aspects of your life and career.
      </div>
    ),
  },
  {
    title: `Can I add a course after the deadline ?`,
    contents: (
      <div>
        You can add a course provided you meet the prerequisite requirements and
        the instructor signs your registration form. Complete a "Late
        Enrollment" form (PDF) in the Form Section and submit it to the College
        of Professional and Global Education (CPGE) office located at One
        Washington Square, Student Union - CPGE, San Jose CA 95192-0135 or fax
        to 408-924-2666 for the Associate Dean's approval.
      </div>
    ),
  },
  {
    title: `If I am outside of the U.S. with an active SEVIS status, do I need to enroll full-time ?`,
    contents: (
      <div>
        Yes, if you wish to maintain your F-1 status, you will need to enroll in
        12 units as an undergrduate student and 9 units as a graduate student.
        If you plan on not enrolling in classes, you will need to request a
        leave of absence by contacting ISSS.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }} id="faq">
      <Container>
        <SectionHeader
          title="Frequently asked questions"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
