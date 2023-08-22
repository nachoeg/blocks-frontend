import {
	Folder,
	LinkRounded,
	PushPin,
	PushPinOutlined,
} from "@mui/icons-material";
import {
	Box,
	Button,
	CardContent,
	Chip,
	IconButton,
	Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Block from "./Block";

function Note({ data }) {
	const handleOpen = () => {
		console.log("abrir nota");
	};
	const handlePin = (e) => {
		e.stopPropagation();
		console.log("pin");
	};
	return (
		PushPinOutlined,
		(
			<Block
				onClick={handleOpen}
				actions={[
					{
						title: data.pinned ? "Unpin" : "Pin",
						icon: data.pinned ? <PushPin /> : <PushPinOutlined />,
					},
				]}
			>
				<CardContent>
					<Typography variant="h5" sx={{}}>
						{data.name}
					</Typography>

					{data.project && (
						<Button
							component={NavLink}
							to={"/projects/" + data.project}
							startIcon={<Folder />}
							size="small"
						>
							{data.project}
						</Button>
					)}
					{data.link && (
						<Button startIcon={<LinkRounded />} size="small" href={data.link}>
							Enlace
						</Button>
					)}

					<Box sx={{ mt: 1 }}>
						{data.tags.map((tag) => {
							return (
								<Chip size="small" sx={{ mr: 0.5 }} label={tag} key={tag} />
							);
						})}
					</Box>
				</CardContent>
			</Block>
		)
	);
}

export default Note;
