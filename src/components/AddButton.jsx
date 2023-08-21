import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";

function AddButton({ colorBoton }) {
	return (
		<Button
			sx={{ width: 250 }}
			// color="inherit"
			color={colorBoton}
			startIcon={<Add />}
		>
			New
		</Button>
	);
}

export default AddButton;
