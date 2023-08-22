import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, Card, Tooltip, useTheme } from "@mui/material";
import "../css/Block.css";

function Block(props) {
	const theme = useTheme();
	return (
		<Card
			onClick={props.onClick}
			className="block"
			sx={{
				width: 250,
				flexGrow: { xs: 1, md: 0 },
				display: "flex",
				flexDirection: "column",
				alignItems: "space-between",
				position: "relative",
				"&:hover": {
					cursor: "pointer",
					backgroundColor: theme.palette.grey[900],
				},
			}}
		>
			<ButtonGroup
				variant="contained"
				color="inherit"
				size="small"
				className="actionsButton"
				sx={{ position: "absolute", top: 10, right: 10, opacity: 0 }}
			>
				{props.actions &&
					props.actions.map((action) => (
						<Tooltip key={action.title} placement="top" title={action.title}>
							<Button>{action.icon}</Button>
						</Tooltip>
					))}
				<Tooltip placement="top" title="Delete">
					<Button>
						<Delete></Delete>
					</Button>
				</Tooltip>
			</ButtonGroup>
			{/* <Tooltip placement="top" title="Delete">
				<Button
					variant="contained"
					color="inherit"
					aria-label="outlined primary button group"
					size="small"
					className="actionsButton"
					sx={{ position: "absolute", top: 10, right: 10, minWidth: 0 }}
				>
					<Delete></Delete>
				</Button>
			</Tooltip> */}
			{props.children}
		</Card>
	);
}

export default Block;
