import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { logoIonic } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import "./theme/variables.css";

/* Mantine styles */
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";




import LeaderboardPage from './pages/dashboard/leaderboard.page';
import SignInPage from './pages/auth/sign-in.page';
import SignUpPage from './pages/auth/sign-up.page';
import Menu from './components/Menu';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { resolver, theme } from './theme';

setupIonicReact();

const App: React.FC = () => {
  return (
    <MantineProvider theme={ theme } cssVariablesResolver={ resolver }>
      <ModalsProvider>
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route exact path="/" component={LeaderboardPage} />
                <Route exact path="/page/login" component={SignInPage} />
                <Route exact path="/page/register" component={SignUpPage} />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
