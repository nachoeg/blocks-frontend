import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import TasksPage from "./pages/TasksPage";

function App() {
	const theme = createTheme({
		status: {
			danger: "#e53e3e",
		},
		palette: {
			mode: "dark",
			// primary: {
			// 	main: "#0197b2",
			// 	dark: "#00616d",
			// },
			// secondary: {
			// 	main: "#ff914d",
			// 	dark: "#b3561b",
			// },
			// neutral: {
			// 	main: "#64748B",
			// 	dark: "#404a59",
			// 	contrastText: "#fff",
			// },
			// tertiary: {
			// 	main: "#b20197",
			// 	dark: "#840085",
			// 	contrastText: "#fff",
			// },
		},
	});

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route path="calendar" element={<></>} />
						<Route path="timetable" element={<></>} />
						<Route path="habits" element={<></>} />
						<Route path="tasks" element={<TasksPage />} />
						<Route path="notes" element={<></>} />
						<Route path="projects" element={<></>} />
						<Route path="goals" element={<></>} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
