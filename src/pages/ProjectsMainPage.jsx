import { Box, useTheme } from "@mui/material";
import KanbanColumn from "../components/KanbanColumn";
import {
	Adjust,
	Archive,
	PauseCircleOutline,
	PlayCircleOutlined,
	TaskAlt,
} from "@mui/icons-material";

function ProjectPage() {
	const theme = useTheme();
	const projects = [
		{
			name: "Programar Pagina Web",
			id: 0,
			tasks: 10,
			tasksLeft: 5,
			progress: 50,
			status: "Not Started",
		},
		{
			name: "Ingernieria de Software",
			id: 1,
			tasks: 10,
			tasksLeft: 12,
			progress: 20,
			status: "In Progress",
		},
		{
			name: "Matematica 3",
			id: 2,
			tasks: 4,
			tasksLeft: 0,
			progress: 100,
			status: "Completed",
		},
		{
			name: "Inglés",
			id: 3,
			tasks: 0,
			tasksLeft: 0,
			progress: 0,
			status: "Not Started",
		},
		{
			name: "Programación Concurrente",
			id: 4,
			tasks: 4,
			tasksLeft: 3,
			progress: 25,
			status: "Paused",
		},
		{
			name: "Blocks App",
			id: 5,
			tasks: 4,
			tasksLeft: 3,
			progress: 25,
			status: "Archived",
		},
	];

	const inProgress = projects.filter((task) => task.status == "In Progress");
	const paused = projects.filter((task) => task.status == "Paused");
	const notStarted = projects.filter((task) => task.status == "Not Started");
	const completed = projects.filter((task) => task.status == "Completed");
	const archived = projects.filter((task) => task.status == "Archived");

	return (
		<Box
			sx={{
				p: 3,
				display: "flex",
				gap: 1,
				overflow: "auto",

				// justifyContent: "center",
			}}
		>
			<KanbanColumn
				type={"project"}
				color={theme.palette.inherit}
				colorBoton={"inherit"}
				icon={<Adjust />}
				title="Not Started"
				items={notStarted}
			></KanbanColumn>
			<KanbanColumn
				type={"project"}
				color={theme.palette.secondary.main}
				colorBoton={"secondary"}
				icon={<PauseCircleOutline />}
				title="Paused"
				items={paused}
			></KanbanColumn>
			<KanbanColumn
				type={"project"}
				color={theme.palette.primary.main}
				colorBoton={"primary"}
				icon={<PlayCircleOutlined />}
				title="In Progress"
				items={inProgress}
			></KanbanColumn>
			<KanbanColumn
				type={"project"}
				color={theme.palette.success.main}
				colorBoton={"success"}
				icon={<TaskAlt />}
				title="Completed"
				items={completed}
			></KanbanColumn>
			<KanbanColumn
				type={"project"}
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

export default ProjectPage;
