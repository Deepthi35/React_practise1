import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  axios  from 'axios';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  textAlign: 'left',
  backgroundColor: 'pink',
  color: theme.palette.text.secondary,
}));

const React_api = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts.map(post => ( 
          <Grid item xs={12}  sm={4} md={4} key={post.id}>
            <Item><Typography>Count: {post.id}</Typography>  {'\n'}
              <Typography >Email Id: {post.email}   </Typography>  {'\n'}
              <Typography >Age: {post.age}</Typography>
            </Item>
          </Grid>
       ))}
      </Grid>
    </Box>
  );
}

export default React_api