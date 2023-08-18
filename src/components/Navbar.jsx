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
import { AutoAwesomeMotion as Logo } from "@mui/icons-material";
import ThemeSwitcher from "./ThemeSwitcher";

const pages = [
	"Calendar",
	"Timetable",
	"Habits",
	"Tasks",
	"Notes",
	"Projects",
	"Goals",
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
						<Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}></Logo>
						{/* 
            ----------------------
            Logo en breakpoint md 
            ----------------------
            */}
						<Typography
							variant="h6"
							noWrap
							// component={NavLink}
							// to="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontWeight: 700,
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Blocks
						</Typography>
						{/* 
            ------------------------
            Paginas en breakpoint md 
            ------------------------
            */}
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<NavLink
									to={"/" + page.toLowerCase()}
									key={page}
									style={{ textDecoration: "none" }}
								>
									{({ isActive }) => (
										<Button
											onClick={handleCloseNavMenu}
											sx={
												{ my: 2, color: "white", display: "block" }
												// ,
												// isActive &&
												// 	{
												// 		// "&:hover": { bgcolor: "secondary.main" },
												// 		// bgcolor: "secondary.main",
												// 		// color: "white",
												// 		// fontWeight: "bold",
												// 	}
											}
											variant={isActive ? "contained" : "text"}
											// variant="contained"
										>
											{page}
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
										key={page}
										onClick={handleCloseNavMenu}
										component={NavLink}
										to={"/" + page.toLowerCase()}
									>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						{/* 
            ----------------------
            Logo en breakpoint xs 
            ----------------------
            */}
						<Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}></Logo>
						<Typography
							variant="h5"
							noWrap
							// component={NavLink}
							// to="/"
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontWeight: 700,
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Blocks
						</Typography>

						{/* 
            --------
            Settings 
            --------
            */}
						<ThemeSwitcher></ThemeSwitcher>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="" src="" />
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
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{setting}</Typography>
									</MenuItem>
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
