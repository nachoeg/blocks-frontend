import { Folder } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	Checkbox,
	CircularProgress,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function Task({ data }) {
	let prioridadValor = 0;
	let prioridadColor = "inherit";
	if (data.priority == "Alta") {
		prioridadValor = 80;
		prioridadColor = "error";
	} else if (data.priority == "Media") {
		prioridadValor = 55;
		prioridadColor = "warning";
	} else if (data.priority == "Baja") {
		prioridadValor = 30;
		prioridadColor = "success";
	}
	return (
		<Card sx={{ minWidth: 275, maxWidth: 300 }}>
			<CardContent>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="h5" sx={{}}>
						{data.name}
					</Typography>
					<CircularProgress
						variant="determinate"
						size={25}
						value={prioridadValor}
						color={prioridadColor}
					/>
				</Box>

				<Button
					component={NavLink}
					to={"/"}
					startIcon={<Folder />}
					size="small"
				>
					{data.project}
				</Button>
				<Typography variant="subtitle2" sx={{}}>
					{data.date}
				</Typography>
				{data.subtasks.map((st) => {
					return (
						<div key={st.id}>
							<Checkbox checked={st.complete} />
							{st.name}
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
}

export default Task;
