import { Card, useTheme } from "@mui/material";

function Block(props) {
	const theme = useTheme();

	return (
		<Card
			onClick={props.onClick}
			sx={{
				width: 250,
				display: "flex",
				flexDirection: "column",
				alignItems: "space-between",

				"&:hover": {
					cursor: "pointer",
					backgroundColor: theme.palette.grey[900],
				},
			}}
		>
			{props.children}
		</Card>
	);
}

export default Block;
