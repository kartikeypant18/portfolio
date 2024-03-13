import React from "react";
import styled from "styled-components";
import { Snackbar } from "@mui/material";
import { MdOutgoingMail } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary}; /* Default text color */
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary}; /* Default text color */
`;

const EmailLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.link_color}; /* Default link color */
  cursor: pointer;
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleEmailClick = () => {
    // No need for this function anymore
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <MdOutgoingMail /> <EmailLink href="mailto:kartike121@gmail.com">
          kartike121@gmail.com
        </EmailLink>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;