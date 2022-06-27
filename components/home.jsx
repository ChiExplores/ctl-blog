import BasicCard from "../components/BasicCard";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import { blue, red } from "@mui/material/colors";
// import { withStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: "blue",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const styles = { margin: "20px" };

const seedData = [
  {
    title: "first title",
    date: "April 15 2022",
    description: "seedData dynamic blog description example",
    slug: "home",
  },
  {
    title: "second title",
    date: "April 26 2022",
    description: "description here",
    slug: "123",
  },
];
const Home = () => {
  return (
    <>
    {/* <div>{posts}</div> */}
      {seedData.map((post) => (
        <BasicCard
          sx={{
            color: blue,
            '&.MuiCard-root': {
              margin: '30px',
              color: red
            },
          }}
          title={post.title}
          date={post.date}
          description={post.description}
          slug={post.slug}
        />
      ))}
    </>
  );
};



export default Home;
