// import { Step, Stepper, StepLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar'; 
import AddTikTokForm from '../AddTikTokForm/AddTikTokForm';
import Home from '../Home/Home';
import { getOembed } from '../../api-calls';
import { Route, Switch } from "react-router";
import { Alert } from '@material-ui/lab';

const App = () => {
  const [initTikToks, setInitTikToks] = useState([
    'https://www.tiktok.com/576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@diogoramos180/video/6946607853092343046?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@krisfire98/video/6954138999200009477?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@icedbrock/video/6954098959128300806?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582',
    'https://www.tiktok.com/@str0ngzer0/video/6954499899572505862?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@itsalexte/video/6952647331875409158?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@youreverydayklemen/video/6951326352809200902?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582',
    'https://www.tiktok.com/@davidsuh/video/6951982921985068293?_d=secCgYIASAHKAESMgowuP0a3DgZKINTZoSXvEI83dYjV0oiv2Db3txZ%2BkjlGUqO9foH%2B7K1Crrb%2B1aaCCAQGgA%3D&enable_clips=1&language=en&preview_pb=0&sec_user_id=MS4wLjABAAAAm0NqotO7ZkQuDVVs_HjPF8yxdph1_vAMDxMAkHGNW5QcKZIuXapsVm04DpxyCvxU&share_app_id=1233&share_item_id=6954587026595351813&share_link_id=F5B527FE-B117-48BB-B7EC-607388914261&source=h5_m&timestamp=1619401549&tt_from=sms&u_code=d9473dk7b9gcjj&user_id=6753812040379483142&utm_campaign=client_share&utm_medium=ios&utm_source=sms&_r=1&lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582',
    'https://www.tiktok.com/@nick.chaif/video/6954001979546914053?_d=secCgYIASAHKAESMgowuP0a3DgZKINTZoSXvEI83dYjV0oiv2Db3txZ%2BkjlGUqO9foH%2B7K1Crrb%2B1aaCCAQGgA%3D&enable_clips=1&language=en&preview_pb=0&sec_user_id=MS4wLjABAAAAm0NqotO7ZkQuDVVs_HjPF8yxdph1_vAMDxMAkHGNW5QcKZIuXapsVm04DpxyCvxU&share_app_id=1233&share_item_id=6954587026595351813&share_link_id=F5B527FE-B117-48BB-B7EC-607388914261&source=h5_m&timestamp=1619401549&tt_from=sms&u_code=d9473dk7b9gcjj&user_id=6753812040379483142&utm_campaign=client_share&utm_medium=ios&utm_source=sms&_r=1&lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6925894707823576582',
    'https://www.tiktok.com/@lexi.diy/video/6950439306162982149?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@clintonaverytharp/video/6954587026595351813?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@csapunch/video/6954532471551642885?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@bananalovesyoutoo/video/6945128725625294086?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@forkthatsgoood/video/6953763533813271813?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=00',
    'https://www.tiktok.com/@abz248/video/6951099476664716550?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@carejeffcounty/video/6943239331855355142?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0',
    'https://www.tiktok.com/@goldenretrieverlife/video/6954103546321161478?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0'
  ])
  const [fetchedTTS, setFetchedTTS] = useState([]);
  const [searchHome, setSearchHome] = useState([...fetchedTTS]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [error, setError] = useState('');

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
    setSearchHome([...filtered]);
  }

  const addPin = (id) => {
    order[order.findIndex((tiktok) => tiktok.data_video_id === id)].isPinned = true;
    sortIfPinned();
  }

  const removePin = (id) => {
    order[order.findIndex((tiktok) => tiktok.data_video_id === id)].isPinned = false;
    sortIfPinned();
  }

  const sortIfPinned = () => {
    const inOrder = order.sort((a, b) => {
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
    setOrder([...inOrder]);
  }

  const loadAll = async () => {
    const ttPromises = initTikToks.map(tt => getOembed(tt));
    const allOembeds = await Promise.all(ttPromises);
    setFetchedTTS([...allOembeds]);
    setSearchHome([...allOembeds]);
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
        />
        <Switch>
          <Route exact path="/">
            {error && <h1>There's been an error loading some of your tiktoks</h1>}
            <Home
              searchHome={ searchHome }
              removeTikTok={ removeTikTok }
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