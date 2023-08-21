import { Folder } from "@mui/icons-material";
import {
	Badge,
	Box,
	Button,
	CardContent,
	Checkbox,
	LinearProgress,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Block from "./Block";

function Goal({ data }) {
	const handleOpen = () => {
		console.log("abrir nota");
	};
	const handlePin = (e) => {
		e.stopPropagation();
		console.log("pin");
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
				</Box>
				{data.area && (
					<Button
						component={NavLink}
						to={"/areas/" + data.area}
						startIcon={<Folder />}
						size="small"
					>
						{data.area}
					</Button>
				)}
			</CardContent>
			<Box sx={{ flexGrow: 1 }}></Box>
			{data.objective > 0 ? (
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
						badgeContent={data.value + "/" + data.objective}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						sx={{ mb: 2, mr: 3 }}
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
				<Checkbox
					sx={{ width: "max-content", alignSelf: "end" }}
					onClick={handleCheck}
					checked={data.complete}
				/>
			)}
		</Block>
	);
}

export default Goal;
