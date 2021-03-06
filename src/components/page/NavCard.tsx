import {
  CardActionArea,
  CardContent,
  Typography,
  Card,
  CardMedia,
  Divider,
} from '@material-ui/core';
import Link from 'next/link';

import React from 'react';

const NavCard = ({
  imagePath,
  label,
  path,
}: {
  imagePath: string;
  label: string;
  path: string;
}) => {
  return (
    <Link href={path} passHref>
      <Card
        style={{
          width: '15rem',
          backgroundColor: 'white',
          margin: '1rem 0',
        }}
        elevation={3}
        square={false}>
        <CardActionArea
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: '2rem',
          }}>
          <CardMedia
            image={imagePath}
            title={imagePath}
            style={{
              height: '4rem',
              width: '4rem',
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h6'
              align='center'
              style={{ color: '#474747' }}>
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default NavCard;
