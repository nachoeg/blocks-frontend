import { ErrorOutline, Folder } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	Checkbox,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Block from "./Block";

function Task({ data }) {
	const handleOpen = () => {
		console.log("abrir tarea");
	};
	const handleCheck = (e) => {
		e.stopPropagation();
		console.log("check");
	};
	return (
		<Block onClick={handleOpen}>
			<CardContent>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="h5" sx={{}}>
						{data.name}
					</Typography>
					{data.priority == "Alta" ? (
						<ErrorOutline color="error" />
					) : data.priority == "Media" ? (
						<ErrorOutline color="warning" />
					) : (
						data.priority == "Baja" && <ErrorOutline color="disabled" />
					)}
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
							<Checkbox onClick={handleCheck} checked={st.complete} />
							{st.name}
						</div>
					);
				})}
			</CardContent>
		</Block>
	);
}

export default Task;
