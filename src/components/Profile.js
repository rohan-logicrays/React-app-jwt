import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
export const Profile = (props) => {
  const user = useSelector((state) => state.user.userData);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const items = localStorage.getItem("token");
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    if (items) {
      setItems(items);
    }
    props.getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {items.length > 0
              ? `welcome ${user.email ? user.email : ""}`
              : "please login to see your profile"}
          </>
        )}
      </h2>
      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 28 }}
            color="text.deepPurple"
            gutterBottom
          >
            Your Profile Info
          </Typography>
          {props.profileData.map((val) =>
            val.gmail === user.email ? (
              <>
                <Typography variant="h5" component="div">
                  {val.name}
                </Typography>
                <Typography variant="h6">{val.age}</Typography>
                <Link
                  to={`/profile/userdata/${val._id}`}
                  onClick={() => {
                    props.setId(val._id);
                  }}
                >
                  <Typography variant="body2" style={{ color: "blue" }}>
                    Click to Know More
                  </Typography>
                </Link>
              </>
            ) : (
              ""
            )
          )}
        </CardContent>
      </Card>
    </>
  );
};
