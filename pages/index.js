import TabNav from "../components/TabNav";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <TabNav />
      </Container>
    </React.Fragment>
  );
}
