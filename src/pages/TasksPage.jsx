import { Card, CardContent, Paper, Typography } from "@mui/material";
import Task from "../components/Task";
import KanbanColumn from "../components/KanbanColumn";

function TasksPage() {
	const tasks = [
		{
			id: 1,
			name: "Recordatorio uno",
			subtasks: [],
			project: "Proyecto uno",
			reminder: true,
		},
		{
			id: 2,
			name: "Recordatorio dos",
			subtasks: [],
			project: "Proyecto dos",
			date: "10/10/23",
			reminder: true,
		},
		{
			id: 3,
			name: "Recordatorio tres",
			subtasks: [],
			project: "Proyecto uno",
			date: "10/10/23",
			reminder: true,
		},
		{
			id: 4,
			name: "Tarea cuatro",
			project: "Proyecto tres",
			subtasks: [{ name: "Subtarea 1", complete: false, id: 1 }],
			status: "Not Started",
			priority: "Baja",
		},
		{
			id: 5,
			name: "Tarea uno",
			subtasks: [
				{ name: "Subtarea 1", complete: true, id: 1 },
				{ name: "Subtarea 2", complete: false, id: 2 },
				{ name: "Subtarea 3", complete: false, id: 3 },
			],
			project: "Proyecto uno",
			status: "In Progress",
			priority: "Alta",
			date: "10/10/23",
		},
		{
			id: 6,
			name: "Tarea dos",
			subtasks: [],
			project: "Proyecto dos",
			status: "Not Started",
			priority: "Media",
			date: "10/10/23",
		},
	];
	const reminders = tasks.filter((task) => task.reminder);
	const inProgress = tasks.filter((task) => task.status == "In Progress");
	const notStarted = tasks.filter((task) => task.status == "Not Started");
	const completed = tasks.filter((task) => task.status == "Complete");
	const archived = tasks.filter((task) => task.status == "Archived");
	return (
		<Paper
			sx={{
				p: 4,
				display: "flex",
				gap: 2,
				// flexWrap: "wrap",
				// justifyContent: "center",
			}}
			elevation={0}
		>
			<KanbanColumn title="Reminders" tasks={reminders}></KanbanColumn>
			<KanbanColumn title="In Progress" tasks={inProgress}></KanbanColumn>
			<KanbanColumn title="Not Started" tasks={notStarted}></KanbanColumn>
			<KanbanColumn title="Completed" tasks={completed}></KanbanColumn>
			<KanbanColumn title="Archived" tasks={archived}></KanbanColumn>
		</Paper>
	);
}

export default TasksPage;
