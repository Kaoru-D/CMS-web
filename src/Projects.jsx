import React from 'react'
import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
});

client.getEntries().then((response) => console.log(response.items));

const Projects = () => {
  return (
    <h2>Projects</h2>
  )
}

export default Projects