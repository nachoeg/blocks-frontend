import { Box } from "@mui/material";

function CalendarPage() {
	return (
		<Box sx={{ display: "flex" }}>
			<Box elevation={4} sx={{ flexGrow: 1 }}>
				Monday
			</Box>
			<Box elevation={1} sx={{ flexGrow: 1 }}>
				Tuesday
			</Box>
			<Box elevation={1} sx={{ flexGrow: 1 }}>
				Wednesday
			</Box>
			<Box elevation={1} sx={{ flexGrow: 1 }}>
				Thursday
			</Box>
			<Box elevation={1} sx={{ flexGrow: 1 }}>
				Friday
			</Box>
			<Box elevation={1} sx={{ flexGrow: 1 }}>
				Saturday
			</Box>
			<Box elevation={1} sx={{ flexGrow: 1 }}>
				Sunday
			</Box>
		</Box>
	);
}

export default CalendarPage;
