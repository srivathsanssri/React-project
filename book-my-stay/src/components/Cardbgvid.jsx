// Cardbgvid.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Cardbgvid = ({ name }) => {
  return (
    <div className="cardContainer">
      <Card className="card">
        <CardMedia
          component="img"
          height="200"
          image={name}
          alt="Card 1"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Content for Card 1.
          </Typography>
        </CardContent>
      </Card>

      {/* Add another Card with the same structure */}
    </div>
  );
};

export default Cardbgvid;
