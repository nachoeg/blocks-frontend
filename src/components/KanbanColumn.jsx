import { Box, Button, CardContent, Tooltip, Typography } from "@mui/material";
import KanbanItem from "./KanbanItem";
import { Add } from "@mui/icons-material";
import "../css/KanbanColumn.css";
import AddButton from "./AddButton";

function KanbanColumn({ type, color, colorBoton, icon, title, items }) {
	console.log(colorBoton);
	return (
		<Box sx={{ minWidth: 250 }} className="kanbanColumn">
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: 1,
				}}
			>
				<Typography variant="button">
					<Box
						sx={{
							display: "flex",
							// justifyContent: "center",
							alignItems: "center",
							gap: 1,
							color: { color },
						}}
					>
						{icon}
						{title}
					</Box>
				</Typography>
				<Tooltip title="Create new block">
					<Button
						className="newButton"
						// variant="outlined"
						color={colorBoton}
						size="small"
						sx={{ minWidth: 0 }}
					>
						<Add></Add>
					</Button>
				</Tooltip>
			</Box>
			<CardContent
				sx={{ p: 0, gap: 1, display: "flex", flexDirection: "column" }}
			>
				{/* <AddButton /> */}
				{items.map((item) => {
					return <KanbanItem type={type} data={item} key={item.id} />;
				})}
				<AddButton colorBoton={colorBoton}></AddButton>
			</CardContent>
		</Box>
	);
}

export default KanbanColumn;
