import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY,
});

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({content_type: 'ProjectCMS'});
        const projectsData = response.items.map((item) => {
          const { title, url, image } = item.fields;
          const id = item.sys.id;
          const img = image?.fields?.file?.url;
          return { id, title, url, img };
        });
        setProjects(projectsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchProjects();
    }, []);
};