import Card from "../components/Card.jsx";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { red } from "@mui/material/colors";

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

const seedData = [
  { title: "first title", date: "April 15 2022", description: "seedData dynamic blog description example" },
  {
    title: "second title",
    date: "April 26 2022",
    description: "description here",
  },
];
export default function Home() {
  return (
    <>
      {seedData.map((post) => (
          <Card
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
            title={post.title}
            date={post.date}
            description={post.description}
          />
      ))}
    </>
  );
}

//TODO: wanted to wrap seedData with ThemeProvider, but it breaks so investigate