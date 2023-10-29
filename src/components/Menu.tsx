import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { Text } from '@mantine/core';

import { useLocation } from 'react-router-dom';
import { podium, logIn, personAdd } from 'ionicons/icons';
import './Menu.css';
import { AppLogo } from '../assets/appLogo';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

const drawerPage: AppPage[] = [
  {
    title: 'Leaderboard',
    url: '/',
    icon: podium
  },
  {
    title: 'Login',
    url: '/page/login',
    icon: logIn
  },
  {
    title: 'Register',
    url: '/page/register',
    icon: personAdd
  }
];


const Menu: React.FC = () => {
  const location = useLocation();
  var userLoggedIn: Boolean = false;

  return (
    <IonMenu contentId="main" type="overlay">
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <AppLogo size='lg' iconOnly={true}/>
        <Text
          style={{
            fontWeight: 700,
            color: "hsl(var(--accent-foreground))"
          }}
        >
          progHours
        </Text>
      </div>
      <IonContent>
        <IonList>
          {drawerPage.map((el, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === el.url ? 'selected' : ''} routerLink={el.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={el.icon} />
                  <IonLabel>{el.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
