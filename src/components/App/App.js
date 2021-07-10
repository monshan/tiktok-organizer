// import { Step, Stepper, StepLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar'; 
import AddTikTokForm from '../AddTikTokForm/AddTikTokForm';
import Independent from '../Independent/Independent';
import { getOembed } from '../../api-calls';
import { Route, Switch } from "react-router";
import mock from '../../mock';
import { Grid, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import { Alert } from '@material-ui/lab';

const lightMode = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#F8F5FA'
    },
    secondary: {
      main: '#1F1E1C'
    },
    text: {
      primary: '#1F1E1C',
      secondary: '#F8F5FA'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  spacing: 8
});

const darkMode = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#1F1E1C"
    },
    secondary: {
      main: "#8F8F8E"
    },
    text: {
      primary: '#8F8F8E',
      secondary: '#1F1E1C'
    }
  }
});

const App = () => {
  const [initTikToks, setInitTikToks] = useState(mock);
  const [fetchedTTS, setFetchedTTS] = useState([]);
  const [displayHome, setDisplayHome] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openFormDialog = () => {
    setDialogOpen(true);
  }

  const closeFormDialog = () => {
    setDialogOpen(false);
  }

  const addTikTok = (url) => {
    setInitTikToks([url, ...initTikToks]);
    closeFormDialog();
  }

  const removeTikTok = (url) => {
    const updated = initTikToks.filter(tiktok => tiktok !== url);
    setInitTikToks([...updated]);
  }

  const search = (query) => {
    const formatQuery = query.toUpperCase();
    const filtered = fetchedTTS.reduce((final, tt) => {
      if (tt.status_msg) return final;
      if (
        tt.author_name.toUpperCase().includes(formatQuery) ||
        tt.title.toUpperCase().includes(formatQuery) ||
        tt.sound_title.toUpperCase().includes(formatQuery)
        ) {
        final.push(tt);
      }
      return final;
    }, [])
    setDisplayHome([...sortIfPinned(filtered)]);
  }

  const togglePin = (id) => {
    const position = fetchedTTS.findIndex(tiktok => tiktok.data_video_id === id);
    fetchedTTS[position].isPinned = !fetchedTTS[position].isPinned;
    setDisplayHome([...sortIfPinned(fetchedTTS)]);
  }

  const sortIfPinned = (toBeSorted) => {
    return toBeSorted.sort((a, b) => {
      if (a.isPinned === b.isPinned) {
        return 0;
      }
      if (!a.isPinned && b.isPinned) {
        return 1;
      }
      if (a.isPinned && !b.isPinned) {
        return (-1);
      }
      return 0;
    });
  }

  const renderAsCards = () => {
    return displayHome.map(({
      cite,
      title,
      author_url,
      author_name,
      sound_title,
      sound_url,
      html,
      data_video_id,
      thumbnail_url,
      status_msg,
      isPinned
    }) => {
      return (
        <Independent 
          key={ data_video_id }
          cite={ cite }
          data_video_id={ data_video_id }
          title={ title }
          author_name={ author_name }
          author_url={ author_url }
          sound_title={ sound_title }
          sound_url={ sound_url }
          html={ html }
          thumbnail_url={ thumbnail_url }
          status_msg={ status_msg }
          isPinned={ isPinned }
          removeTikTok={ removeTikTok }
          togglePin={ togglePin }
        />
      )
    })
  }

  const retrieveSearchOptions = () => {
    return fetchedTTS.reduce((options, { author_name, sound_title, title }) => {
      options.push(author_name, sound_title, title);
      return options;
    }, [])
  }

  useEffect(() => {
    const loadAll = async () => {
      const ttPromises = initTikToks.map(tt => getOembed(tt));
      const allOembeds = await Promise.all(ttPromises);
      setFetchedTTS([...allOembeds]);
      setDisplayHome([...allOembeds]);
    }

    loadAll();
  }, [initTikToks, isDarkMode])

  const determineMode = () => {
    if (isDarkMode) {
      return (
        <ThemeProvider theme={darkMode}>
      <div className="App">
          <NavBar 
            openForm={ openFormDialog }
            search={ search }
            retrieveSearchOptions={ retrieveSearchOptions }
            isDarkMode={ isDarkMode }
            setIsDarkMode={ setIsDarkMode }
          />
        <main>
          <AddTikTokForm 
            status={ dialogOpen }
            addTikTok={ addTikTok }
            closeForm={ closeFormDialog }
          />
          <Switch>
            <Route exact path="/">
              <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
                children={ renderAsCards() }
                isDarkMode={ isDarkMode }
                id="gridContainer"
              />
            </Route>
            <Route path="*">
              <Alert 
                variant="filled"
                severity="error"
                for-cypress="bad-route"
              >
                This page doesn't exist! Please navigate back to Home with the Home tab above~
              </Alert>
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeProvider>
      )
    }

    if (!isDarkMode) {
      return (
        <ThemeProvider theme={lightMode}>
          <div className="App">
              <NavBar 
                openForm={ openFormDialog }
                search={ search }
                retrieveSearchOptions={ retrieveSearchOptions }
                isDarkMode={ isDarkMode }
                setIsDarkMode={ setIsDarkMode }
              />
            <main>
              <AddTikTokForm 
                status={ dialogOpen }
                addTikTok={ addTikTok }
                closeForm={ closeFormDialog }
              />
              <Switch>
                <Route exact path="/">
                  <Grid
                    container
                    spacing={2}
                    justify="center"
                    alignItems="center"
                    children={ renderAsCards() }
                    isDarkMode={ isDarkMode }
                    id="gridContainer"
                  />
                </Route>
                <Route path="*">
                  <Alert 
                    variant="filled"
                    severity="error"
                    for-cypress="bad-route"
                  >
                    This page doesn't exist! Please navigate back to Home with the Home tab above~
                  </Alert>
                </Route>
              </Switch>
            </main>
          </div>
        </ThemeProvider>
      );
    }
  }

  return determineMode();
}

export default App;