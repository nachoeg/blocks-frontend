import { Box } from "@mui/material";
import AddButton from "../components/AddButton";
import Area from "../components/Area";

function AreasPage() {
	const areas = [
		{
			name: "Entrenamiento",
			id: 0,
			tasks: 10,
			tasksLeft: 5,
			progress: 50,
		},
		{
			name: "Facultad",
			id: 1,
			tasks: 10,
			tasksLeft: 12,
			progress: 20,
		},
		{
			name: "Musica",
			id: 2,
			tasks: 4,
			tasksLeft: 0,
			progress: 100,
		},
		{
			name: "Salud",
			id: 3,
			tasks: 0,
			tasksLeft: 0,
			progress: 0,
		},
		{
			name: "Personal",
			id: 4,
			tasks: 4,
			tasksLeft: 3,
			progress: 25,
		},
		{
			name: "Programacion",
			id: 5,
			tasks: 4,
			tasksLeft: 3,
			progress: 25,
		},
	];

	return (
		<Box
			sx={{
				p: 3,
				display: "flex",
				gap: 1,
				flexWrap: "wrap",

				// justifyContent: "center",
			}}
		>
			{areas.map((note) => {
				return <Area data={note} key={note.id} />;
			})}
			<AddButton />
		</Box>
	);
}

export default AreasPage;
