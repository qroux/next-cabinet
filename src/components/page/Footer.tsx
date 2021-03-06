import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import Mail from "@material-ui/icons/MailOutline";
import Pin from "@material-ui/icons/RoomOutlined";
import Phone from "@material-ui/icons/PhoneEnabledOutlined";
import React from "react";

const Footer = () => {
  const items = [
    { content: "04 91 33 32 05", icon: <Phone /> },
    { content: "9 rue Francis Davso, 13001 Marseille", icon: <Pin /> },
    { content: "roux.gilbert0638@orange.fr", icon: <Mail /> },
  ];

  const renderItems = () => {
    return items.map((item, id) => {
      return (
        <div
          style={{ display: "flex", alignItems: "center", padding: "0.2rem 0" }}
          key={id}
        >
          {item.icon}
          <Typography variant="body1" style={{ marginLeft: "1rem" }}>
            {item.content}
          </Typography>
        </div>
      );
    });
  };

  return (
    <Paper
      elevation={0}
      style={{
        padding: "5rem 0",
        backgroundColor: "transparent",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>{renderItems()}</Box>
      </Container>
    </Paper>
  );
};

export default Footer;
