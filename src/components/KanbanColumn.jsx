import { Card, CardContent, Typography } from "@mui/material";
import Task from "./Task";
import AddButton from "./AddButton";

function KanbanColumn({ title, tasks }) {
	return (
		<Card elevation={0}>
			<Typography sx={{ textAlign: "center" }} variant="h5">
				{title}
			</Typography>
			<CardContent sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
				<AddButton></AddButton>
				{tasks.map((task) => {
					return <Task data={task} key={task.id} />;
				})}
			</CardContent>
		</Card>
	);
}

export default KanbanColumn;
