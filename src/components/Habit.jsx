import {
	Badge,
	Box,
	CardContent,
	Checkbox,
	LinearProgress,
	Tooltip,
	Typography,
} from "@mui/material";
import Block from "./Block";

function Habit({ data }) {
	const progress =
		(data.habits.reduce(
			(accumulator, habit) => accumulator + habit.checked,
			0
		) /
			data.habits.length) *
		100;
	return (
		<Block>
			<CardContent>
				<Typography variant="subtitle1">{data.date}</Typography>
				{data.habits.map((habit) => (
					<Box key={habit.name}>
						<Checkbox checked={habit.checked}></Checkbox>
						{habit.name}
					</Box>
				))}
			</CardContent>
			<Tooltip title="Progress" placement="bottom-end">
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Badge
						color={
							progress == 100
								? "success"
								: progress >= 50
								? "primary"
								: progress >= 25
								? "warning"
								: "error"
						}
						badgeContent={progress + "%"}
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
							progress == 100
								? "success"
								: progress >= 50
								? "primary"
								: progress >= 25
								? "warning"
								: "error"
						}
						value={progress}
					/>
				</Box>
			</Tooltip>
		</Block>
	);
}

export default Habit;
