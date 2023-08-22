import { Box } from "@mui/material";
import Note from "../components/Note";
import AddButton from "../components/AddButton";
import Habit from "../components/Habit";

function HabitsPage() {
	const habits = [
		{
			id: 1,
			date: "21/09/21",
			habits: [
				{
					name: "Ejercicio",
					checked: true,
				},
				{
					name: "Tomar 2lt agua",
					checked: true,
				},
				{
					name: "Estudiar",
					checked: false,
				},
				{
					name: "Tomar sol",
					checked: true,
				},
			],
		},
		{
			id: 2,
			date: "22/09/21",
			habits: [
				{
					name: "Ejercicio",
					checked: false,
				},
				{
					name: "Tomar 2lt agua",
					checked: true,
				},
				{
					name: "Estudiar",
					checked: false,
				},
				{
					name: "Tomar sol",
					checked: false,
				},
			],
		},
		{
			id: 3,
			date: "23/09/21",
			habits: [
				{
					name: "Ejercicio",
					checked: false,
				},
				{
					name: "Tomar 2lt agua",
					checked: true,
				},
				{
					name: "Estudiar",
					checked: true,
				},
				{
					name: "Tomar sol",
					checked: false,
				},
			],
		},
		{
			id: 4,
			date: "24/09/21",
			habits: [
				{
					name: "Ejercicio",
					checked: false,
				},
				{
					name: "Tomar 2lt agua",
					checked: false,
				},
				{
					name: "Estudiar",
					checked: false,
				},
				{
					name: "Tomar sol",
					checked: false,
				},
			],
		},
		{
			id: 5,
			date: "24/09/21",
			habits: [
				{
					name: "Ejercicio",
					checked: true,
				},
				{
					name: "Tomar 2lt agua",
					checked: true,
				},
				{
					name: "Estudiar",
					checked: true,
				},
				{
					name: "Tomar sol",
					checked: true,
				},
			],
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
			{habits.map((habit) => {
				return <Habit data={habit} key={habit.id} />;
			})}
		</Box>
	);
}

export default HabitsPage;
