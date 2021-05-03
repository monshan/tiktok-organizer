// import { Step, Stepper, StepLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar'; 
import AddTikTokForm from '../AddTikTokForm/AddTikTokForm';
import Independent from '../Independent/Independent';
import { getOembed } from '../../api-calls';
import { Route, Switch } from "react-router";
import mock from '../../mock';
import { Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const App = () => {
  const [initTikToks, setInitTikToks] = useState(mock);
  const [fetchedTTS, setFetchedTTS] = useState([]);
  const [displayHome, setDisplayHome] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

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
        tt.title.toUpperCase().includes(formatQuery)
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

  const retrieveAuthors = () => {
    return fetchedTTS.reduce((authors, tiktok) => {
      authors.push(tiktok.author_name);
      return authors;
    }, [])
  }

  const loadAll = async () => {
    const ttPromises = initTikToks.map(tt => getOembed(tt));
    const allOembeds = await Promise.all(ttPromises);
    setFetchedTTS([...allOembeds]);
    setDisplayHome([...allOembeds]);
  }

  useEffect(() => {
    loadAll();
  }, [initTikToks])

  return (
    <div className="App">
      <main>
        <NavBar 
          openForm={ openFormDialog }
          search={ search }
        />
        <AddTikTokForm 
          status={ dialogOpen }
          addTikTok={ addTikTok }
          closeForm={ closeFormDialog }
          retrieveAuthors={ retrieveAuthors }
        />
        <Switch>
          <Route exact path="/">
            <Grid
              container
              spacing={2}
              justify="center"
              alignItems="center"
              children={ renderAsCards() }
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
  );
}

export default App;