import axios from 'axios';
import { useEffect, useState } from 'react'
import withLoading from '../hoc/withLoading';
import { getAllPeople } from '../services/people';

function Home({ setLoading }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getAllPeople();
      if(response.status === 200) {
        setData(response.data.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>Deneme</div>
  )
}

export default withLoading(Home);