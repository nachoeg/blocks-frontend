import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";

function AddButton() {
	return (
		<Button variant="outlined" startIcon={<Add />}>
			New
		</Button>
	);
}

export default AddButton;
