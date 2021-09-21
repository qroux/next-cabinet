import { Typography, useTheme } from '@material-ui/core';
import React from 'react';

const Title = ({ label }: { label: string }) => {
  const theme = useTheme();

  return (
    <Typography
      variant='h3'
      color='textPrimary'
      align='center'
      style={{
        // backgroundColor: theme.palette.secondary.main,
        // border: `1px solid ${theme.palette.secondary.main}`,
        padding: '1rem 0',
        // @ts-ignore
        // color: theme.palette.text.light,
        marginBottom: '0.5rem',
        borderRadius: '3px',
        // fontWeight: "bold",
      }}>
      {label}
    </Typography>
  );
};

export default Title;
