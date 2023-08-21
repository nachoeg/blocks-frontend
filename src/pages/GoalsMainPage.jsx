import { Box, Typography } from "@mui/material";
import GoalsList from "../components/GoalsList";
function GoalsPage() {
	const goalsYear = [
		{
			year: 2023,
			goals: [
				{
					id: 1,
					name: "Terminar la facultad",
					area: "Estudios",
					objective: 4,
					value: 4,
					progress: 100,
					complete: false,
				},
				{
					id: 2,
					name: "Cambio fisico",
					area: "Entrenamiento",
					objective: 4,
					value: 0,
					progress: 0,

					complete: false,
				},
				{
					id: 3,
					name: "Mejorar el sueño",
					area: "Personal",
					objective: 4,
					value: 1,
					progress: 25,

					complete: false,
				},
				{
					id: 4,
					name: "Terminar la facultad",
					area: "Estudios",
					objective: 4,
					value: 2,
					progress: 50,

					complete: false,
				},
				{
					id: 5,
					name: "Cambio fisico",
					area: "Entrenamiento",
					objective: 4,
					value: 3,
					progress: 75,

					complete: false,
				},
				{
					id: 6,
					name: "Mejorar el sueño",
					area: "Personal",
					objective: 0,
					value: 0,
					progress: 100,
					complete: true,
				},
			],
		},
		{
			year: 2022,
			goals: [
				{
					id: 1,
					name: "Terminar la facultad",
					tags: ["Drive", "Educación"],
					area: "Matematicas",
					pinned: false,
					complete: false,
					link: "drivedematematicas.com",
				},
				{
					id: 2,
					name: "Cambio fisico",
					tags: ["Apuntes"],
					project: "Matematicas",
					pinned: true,
					complete: false,
					link: "",
				},
				{
					id: 3,
					name: "Mejorar el sueño",
					tags: ["Personal"],
					project: "",
					pinned: false,
					complete: false,
					link: "",
				},
			],
		},
	];
	return (
		<Box
			sx={{
				p: 3,
				display: "flex",
				gap: 3,
				// flexWrap: "wrap",
				// overflow: "scroll",
				flexDirection: "column",
				// justifyContent: "center",
			}}
		>
			{goalsYear.map((gy) => {
				return (
					<Box key={gy.year}>
						<Typography variant="h4">{gy.year}</Typography>
						<GoalsList goals={gy.goals} />
					</Box>
				);
			})}
		</Box>
	);
}

export default GoalsPage;
