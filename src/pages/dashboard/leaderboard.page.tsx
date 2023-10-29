import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Button, Dialog, Group, Table, TextInput, Text, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { filter } from "ionicons/icons";

import { LeaderboardType, useLeaderboard } from "../../../libs/data-access/useLeaderboard";
import { useState } from "react";

const LeaderboardPage: React.FC = () => {

	const [type, setType] = useState<LeaderboardType>("full");
  const { data, isFetching } = useLeaderboard({ type });


	const elements = [
		{ position: 1, mass: 12.011, symbol: 'C', name: 'Carbon' },
		{ position: 2, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
		{ position: 3, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
		{ position: 4, mass: 137.33, symbol: 'Ba', name: 'Barium' },
		{ position: 5, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
	];

	const rows = elements.map((element) => (
    <Table.Tr key={element.name} onClick={() => showModal(element)}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
    </Table.Tr>
  ));


	const showModal = (element: any) => {
		console.log("Hello");
		modals.open({
			title: element.name,
			centered: true,
			children: (
				<>
					<Text>{ element.position }</Text>
					<Text>{ element.symbol }</Text>
					<Text>{ element.mass }</Text>
					<Button fullWidth mt="md">
						Submit
					</Button>
				</>
			),
		});
	}
		

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton>
							<IonIcon icon={filter}/>
						</IonMenuButton>
					</IonButtons>
					<IonTitle>Leaderboard</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				{
					isFetching ? <p>Data download in progress</p> 
					: <Table withTableBorder>
							<Table.Thead>
								<Table.Tr>
									<Table.Th style={{width: '10%'}}>Rank</Table.Th>
									<Table.Th style={{width: '60%'}}>Name</Table.Th>
									<Table.Th style={{width: '30%'}}>Score</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>{rows}</Table.Tbody>
						</Table>
				}
 			</IonContent>
		</IonPage>
	)
}

export default LeaderboardPage;