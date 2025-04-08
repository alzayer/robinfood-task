import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Robin Food Task</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h1>This page is served from a Docker container!</h1>
        <ul>
          <li>NestJS for the backend</li>
          <li>Ionic React for the frontend</li>
          <li>Dockerized & deployed</li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default Home;
