import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <Grid container>
        {//<Grid item md={3} sm={5} xs={12}>
          // <Sidebar />
        // </Grid>
        }
        <Grid item md={9} sm={7} xs={12}>
          <MainContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
