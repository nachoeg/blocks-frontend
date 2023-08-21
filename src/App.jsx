import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import TasksMainPage from "./pages/TasksMainPage";
import NotesMainPage from "./pages/NotesMainPage";
import ProjectsMainPage from "./pages/ProjectsMainPage";
import HomePage from "./pages/HomePage";
import AreasMainPage from "./pages/AreasMainPage";
import GoalsMainPage from "./pages/GoalsMainPage";
import HabitsPage from "./pages/HabitsPage";
import TimetablePage from "./pages/TimetablePage";
import CalendarPage from "./pages/CalendarPage";
import ProjectPage from "./pages/ProjectPage";
import "./css/App.css";
import AreaPage from "./pages/AreaPage";
import TaskPage from "./pages/TaskPage";
import GoalPage from "./pages/GoalPage";
import NotePage from "./pages/NotePage";

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
						<Route index element={<HomePage />} />
						<Route path="calendar" element={<CalendarPage />} />
						<Route path="timetable" element={<TimetablePage />} />
						<Route path="habits" element={<HabitsPage />} />
						<Route path="tasks" element={<TasksMainPage />} />
						<Route path="notes" element={<NotesMainPage />} />
						<Route path="projects" element={<ProjectsMainPage />} />
						<Route path="areas" element={<AreasMainPage />} />
						<Route path="projects/:nombre" element={<ProjectPage />} />
						<Route path="areas/:nombre" element={<AreaPage />} />
						<Route path="tasks/:nombre" element={<TaskPage />} />
						<Route path="notes/:nombre" element={<NotePage />} />
						<Route path="goals/:nombre" element={<GoalPage />} />
						<Route path="goals" element={<GoalsMainPage />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
