import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" className="nav-childs">
            Home
          </NavLink>
          <NavLink to="/create" className="nav-childs">
            Create Room
          </NavLink>
          <NavLink to="/join" className="nav-childs">
            Join Room
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
