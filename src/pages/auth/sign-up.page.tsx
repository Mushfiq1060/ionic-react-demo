import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { filter } from "ionicons/icons";


const SignUpPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton>
							<IonIcon icon={filter}/>
						</IonMenuButton>
					</IonButtons>
					<IonTitle>Register</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Login</IonTitle>
					</IonToolbar>
				</IonHeader>
				<p>This is Register Page</p>
			</IonContent>
		</IonPage>
	)
}

export default SignUpPage;