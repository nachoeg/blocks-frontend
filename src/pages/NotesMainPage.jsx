import { Box } from "@mui/material";
import Note from "../components/Note";
import AddButton from "../components/AddButton";

function NotesPage() {
	const notes = [
		{
			id: 1,
			name: "Nota uno, nota uno, nota uno, nota uno",
			tags: ["Drive", "Educación"],
			project: "Matematicas",
			pinned: false,
			link: "drivedematematicas.com",
		},
		{
			id: 2,
			name: "Nota dos",
			tags: ["Apuntes"],
			project: "Matematicas",
			pinned: true,
			link: "",
		},
		{
			id: 3,
			name: "Nota tres",
			tags: ["Personal"],
			project: "",
			pinned: false,
			link: "",
		},
	];
	notes.sort((note) => (note.pinned ? -1 : 1));
	return (
		<Box
			sx={{
				p: 3,
				display: "flex",
				gap: 1,
				flexWrap: "wrap",
				// justifyContent: "center",
			}}
		>
			{notes.map((note) => {
				return <Note data={note} key={note.id} />;
			})}
			<AddButton />
		</Box>
	);
}

export default NotesPage;
