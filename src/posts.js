import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

function Posts() {
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
      <Box>
      <Grid className="main-container" container rowGap={2} columnGap={2} alignItems={'center'} >
          {posts.map(post => (
            <Grid key={post.id} className='post-componenet' item xs={12}  md={3} padding={1} margin={1}>
                <Typography>Count: {post.id}</Typography>  {'\n'}
                <Typography >Email Id: {post.email}   </Typography>  {'\n'}
                <Typography >Age: {post.age}</Typography>
              </Grid>
          ))}
      </Grid>
    <a href='/about'>click</a> 
      <Button href="/React_api">click next</Button>
      </Box>
      
    );
}

export default Posts;