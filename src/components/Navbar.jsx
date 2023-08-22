import styled from "@emotion/styled";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
	CalendarMonth,
	Folder,
	AutoAwesomeMotion as Logo,
} from "@mui/icons-material";
import ThemeSwitcher from "./ThemeSwitcher";
import {
	BullseyeArrow,
	ChartBox,
	CheckboxMarked,
	CheckboxMultipleBlankCircle,
	Note,
	Timetable,
} from "mdi-material-ui";

const pages = [
	{ name: "Calendar", icon: <CalendarMonth></CalendarMonth> },
	{ name: "Timetable", icon: <Timetable></Timetable> },
	{ name: "Habits", icon: <ChartBox></ChartBox> },
	{ name: "Tasks", icon: <CheckboxMarked></CheckboxMarked> },
	{ name: "Notes", icon: <Note></Note> },
	{ name: "Projects", icon: <Folder></Folder> },
	{
		name: "Areas",
		icon: <CheckboxMultipleBlankCircle></CheckboxMultipleBlankCircle>,
	},
	{ name: "Goals", icon: <BullseyeArrow /> },
];
const settings = ["Profile", "Logout"];
function Navbar() {
	const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<AppBar elevation={0} position="fixed">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						{/* 
            ----------------------
            Logo en breakpoint md 
            ----------------------
            */}
						<Box
							component={NavLink}
							to="/"
							sx={{
								display: { xs: "none", md: "flex" },
								textDecoration: "none",
								color: "inherit",
								alignItems: "center",
							}}
						>
							<Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}></Logo>

							<Typography
								variant="h6"
								noWrap
								sx={{
									mr: 2,
									fontWeight: 700,
									color: "inherit",
									textDecoration: "none",
								}}
							>
								Blocks
							</Typography>
						</Box>

						{/* 
            ------------------------
            Paginas en breakpoint md 
            ------------------------
            */}
						<Box
							sx={{
								flexGrow: 1,
								gap: 1,
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((page) => (
								<NavLink
									to={"/" + page.name.toLowerCase()}
									key={page.name}
									style={{ textDecoration: "none", color: "inherit" }}
								>
									{({ isActive }) => (
										<Button
											onClick={handleCloseNavMenu}
											color="inherit"
											// color={isActive ? "disabled" : "inherit"}
											size="small"
											// disabled={!isActive}
											startIcon={page.icon}
											sx={[
												{ my: 2 },
												isActive && {
													px: 0.65,
												},
												!isActive && {
													color: "grey",
													// fontWeight: "bold",
													// px: "4px",
												},
											]}
											variant={isActive ? "contained" : "text"}
											// variant="contained"
										>
											{page.name}
										</Button>
									)}
								</NavLink>
							))}
						</Box>

						{/* 
            ------------------------
            Paginas en breakpoint xs 
            ------------------------
            */}
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.name}
										onClick={handleCloseNavMenu}
										component={NavLink}
										to={"/" + page.name.toLowerCase()}
									>
										<Box sx={{ mr: 1 }}>{page.icon}</Box>
										<Typography textAlign="center">{page.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						{/* 
            ----------------------
            Logo en breakpoint xs 
            ----------------------
            */}
						<Box
							component={NavLink}
							to="/"
							sx={{
								display: { xs: "flex", md: "none" },
								textDecoration: "none",
								color: "inherit",
								alignItems: "center",
								flexGrow: 1,
							}}
						>
							<Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}></Logo>
							<Typography
								variant="h5"
								noWrap
								// component={NavLink}
								// to="/"
								sx={{
									mr: 2,
									fontWeight: 700,
									color: "inherit",
									textDecoration: "none",
								}}
							>
								Blocks
							</Typography>
						</Box>

						{/* 
            --------
            Settings 
            --------
            */}
						<ThemeSwitcher></ThemeSwitcher>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="Profile" src="" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<NavLink
										key={setting}
										to={`/${setting.toLowerCase()}`}
										style={{
											textDecoration: "none",
											color: "inherit",
										}}
									>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography textAlign="center">{setting}</Typography>
										</MenuItem>
									</NavLink>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Offset />
			<Outlet />
		</>
	);
}

export default Navbar;
