import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPartCard = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background: "white",
        width: "270px",
        height: "280px",
        borderBottomLeftRadius: "20px",
        cursor: "pointer",
        gap: "47px",
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
      }}
      onClick={() => {
        setBodyPart(item);
        document.getElementById("exercises").scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight={"bold"}
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;
