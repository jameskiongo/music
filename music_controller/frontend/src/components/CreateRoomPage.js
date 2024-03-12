import React from "react";
import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";

function CreateRoomPage() {
  let defaultVotes = 2;
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          Create A room
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
          <FormHelperText>
            <div align="center">Guest Control of Playback State</div>
          </FormHelperText>
          <RadioGroup row defaultValue={true}>
            <FormControlLabel
              value="true"
              control={<Radio color="primary" />}
              label="Play/Pause"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="false"
              control={<Radio color="secondary" />}
              label="No Control"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField
            required={true}
            type="number"
            defaultValue={defaultVotes}
            inputProps={{
              min: 1,
              style: {
                textAlign: "center",
              },
            }}
          />
          <FormHelperText>
            <div align="center">Votes required to skip song</div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained">
          Create A Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </Grid>
    </Grid>
  );
}
export default CreateRoomPage;
