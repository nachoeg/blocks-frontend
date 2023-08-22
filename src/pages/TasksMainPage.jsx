import { Box, useTheme } from "@mui/material";
import KanbanColumn from "../components/KanbanColumn";
import {
	Adjust,
	Archive,
	Notifications,
	PlayCircleOutlined,
	TaskAlt,
} from "@mui/icons-material";

function TasksPage() {
	const theme = useTheme();

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
			status: "Not Started",
			priority: "Alta",
			date: "10/10/23",
		},
		{
			id: 6,
			name: "Tarea dos asdfdd",
			subtasks: [],
			project: "Proyecto dos",
			status: "Not Started",
			priority: "Media",
			date: "10/10/23",
		},
		{
			id: 7,
			name: "Tarea dos",
			subtasks: [],
			project: "Proyecto dos",
			status: "Completed",
			priority: "Media",
			date: "10/10/23",
		},
		{
			id: 8,
			name: "Tarea dos",
			subtasks: [],
			project: "Proyecto dos",
			status: "Archived",
			priority: "Media",
			date: "10/10/23",
		},
	]
		.sort((task) => {
			if (task.priority == "Baja") {
				return -1;
			}
		})
		.sort((task) => {
			if (task.priority == "Media") {
				return -1;
			}
		})
		.sort((task) => {
			if (task.priority == "Alta") {
				return -1;
			}
		});
	const reminders = tasks.filter((task) => task.reminder);
	const inProgress = tasks.filter((task) => task.status == "In Progress");
	const notStarted = tasks.filter((task) => task.status == "Not Started");
	const completed = tasks.filter((task) => task.status == "Completed");
	const archived = tasks.filter((task) => task.status == "Archived");
	return (
		<Box
			sx={{
				p: 3,
				pt: 1,
				display: "flex",
				gap: 1,
				overflow: "auto",
				// justifyContent: "center",
			}}
		>
			<KanbanColumn
				type={"task"}
				color={theme.palette.warning.main}
				colorBoton={"warning"}
				// icon={<CircleNotificationsOutlined />}
				icon={<Notifications />}
				title="Reminders"
				items={reminders}
			></KanbanColumn>
			<KanbanColumn
				type={"task"}
				color={theme.palette.inherit}
				colorBoton={"inherit"}
				icon={<Adjust />}
				title="Not Started"
				items={notStarted}
			></KanbanColumn>
			<KanbanColumn
				type={"task"}
				color={theme.palette.primary.main}
				colorBoton={"primary"}
				icon={<PlayCircleOutlined />}
				title="In Progress"
				items={inProgress}
			></KanbanColumn>
			<KanbanColumn
				type={"task"}
				color={theme.palette.success.main}
				colorBoton={"success"}
				icon={<TaskAlt />}
				title="Completed"
				items={completed}
			></KanbanColumn>
			<KanbanColumn
				type={"task"}
				color={theme.palette.error.main}
				colorBoton={"error"}
				icon={<Archive />}
				// icon={<HighlightOffOutlined />}
				title="Archived"
				items={archived}
			></KanbanColumn>
		</Box>
	);
}

export default TasksPage;
