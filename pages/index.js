import Head from "next/head";
import Link from "next/link";
import TabNav from "../components/TabNav";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <TabNav/>
      </Container>
    </React.Fragment>
    // <div className="container">
    //   <Head>
    //     <title>Chi's CTL Blog</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main>
    //     <TabNav/>
    //     {/* <p className="description">This is a side project during work hours at CTL with the goal of improving my tech skills. I worked with Nate, as a mentor. We met every other Monday to plan the work and check in on my progress. I specifically wanted to build a site to learn more about different frameworks and decision making.</p> */}
    //   </main>

    //   <footer>
    //       Made by Chi
    //   </footer>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    //         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    //         sans-serif;
    //     }

    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>
    // </div>
  );
}
