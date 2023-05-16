import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";

export const UserData = (props) => {
  useEffect(() => {
    props.getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {props.profileData.map((val) =>
        val._id === props.id ? (
          <div
            style={{
              width: "400px",
              fontSize: "40px",
              display: "inline-grid",
              marginTop: "20px",
              border: "2px solid #1976d2",
              borderRadius: "10px",
              boxShadow: "5px 10px #888888",
            }}
          >
            <Typography style={{ fontSize: "50px" }}>
              Name - {val.name}
            </Typography>
            <Typography style={{ fontSize: "40px" }}>
              Age - {val.age}
            </Typography>
            <Typography style={{ fontSize: "40px" }}>
              City - {val.city}
            </Typography>
            <Typography style={{ fontSize: "40px" }}>{val.gender}</Typography>
            <Typography style={{ fontSize: "40px" }}>
              {val.language[0]} {val.language[1]} {val.language[2]}{" "}
              {val.language[3]}
            </Typography>
            <Typography style={{ fontSize: "40px" }} variant="body2">
              {val.mobileNo}
            </Typography>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
