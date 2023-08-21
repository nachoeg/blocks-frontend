import { Box } from "@mui/material";
import Goal from "./Goal";
import AddButton from "./AddButton";

function GoalsList({ goals }) {
	console.log(goals);
	return (
		<Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
			{goals.map((goal) => {
				return <Goal key={goal.id} data={goal}></Goal>;
			})}
			<AddButton></AddButton>
		</Box>
	);
}

export default GoalsList;
