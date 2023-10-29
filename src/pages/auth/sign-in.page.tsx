import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Box, Button, PasswordInput, Stack, TextInput, Title, useMantineTheme, Text } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { filter } from "ionicons/icons";


const SignInPage: React.FC = () => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton>
							<IonIcon icon={filter}/>
						</IonMenuButton>
					</IonButtons>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
        <Box px="lg" mt="lg">
          <Stack>
            <Title order={3}>Profile</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <TextInput label="Full Name" placeholder="Full Name" />
            <PasswordInput
              label="Current Password"
              placeholder="Current Password"
            />
            <PasswordInput label="New Password" placeholder="New Password" />
            <Button size="md" variant="proghours-ui-light">
              Update
            </Button>
          </Stack>
        </Box>
      </IonContent>
		</IonPage>
	)
}

export default SignInPage;