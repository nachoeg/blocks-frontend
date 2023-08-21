import {
	Alert,
	Badge,
	Box,
	CardContent,
	LinearProgress,
	Typography,
} from "@mui/material";
import Block from "./Block";

function Project({ data }) {
	const abrir = () => {
		console.log("abrir");
	};
	return (
		<Block>
			<CardContent
				sx={{
					flexGrow: 1,
				}}
				onClick={abrir}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "column",
					}}
				>
					<Typography variant="h5" sx={{}}>
						{data.name}
					</Typography>
				</Box>
			</CardContent>
			{data.tasks > 0 ? (
				<>
					<Badge
						color={
							data.progress == 100
								? "success"
								: data.progress >= 50
								? "primary"
								: data.progress >= 25
								? "warning"
								: "error"
						}
						badgeContent={data.tasksLeft}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						sx={{ mb: 2, mr: 2 }}
					></Badge>
					<LinearProgress
						variant="determinate"
						sx={{}}
						color={
							data.progress == 100
								? "success"
								: data.progress >= 50
								? "primary"
								: data.progress >= 25
								? "warning"
								: "error"
						}
						value={data.progress}
					/>
				</>
			) : (
				<Alert
					variant="outlined"
					severity="info"
					// color="warning"
					sx={{ mx: 1, mb: 1 }}
				>
					Write the project's first tasks!
				</Alert>
			)}
		</Block>
	);
}

export default Project;
