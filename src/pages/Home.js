import { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import withLoading from '../hoc/withLoading';
import { getAllPeople, getAllCategories } from '../services/swapi';

function Home({ setLoading }) {
  const [categoriesData, setCategoriesData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);

  // console.log(categoriesData);
  // console.log(peopleData);

  const fetchData = async () => {
    try {
      setLoading(true);
      const peopleResponse = await getAllPeople();
      const categoriesResponse = await getAllCategories();
      if(peopleResponse.status === 200) {
        setPeopleData(peopleResponse.data.results);
      }
      if(categoriesResponse.status === 200) {
        setCategoriesData(Object.keys(categoriesResponse.data));
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
    <div className='h-screen flex items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'>
      <div className='h-full w-1/6 h-5/6 m-12 rounded-lg bg-blue-800 flex flex-col items-center'>
        {/* <ul>
          {
            categoriesData.length > 0 ?
            categoriesData.map((category, index) => {
              return (
                <li key={index}>
                  <h1 className="capitalize text-2xl font-bold text-white">{category}</h1>
                </li>
              )})
            : <Loading />
          }
        </ul> */}
        <h1 className="capitalize text-2xl font-bold text-white">Home</h1>
      </div>
      <div className="h-full w-5/6 h-5/6 bg-red-700 m-12 rounded-lg flex flex-col text-white">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
              </tr>
          </thead>
          <tbody>
            {
              peopleData.length > 0 ?
              peopleData.map((person, index) => {
                return (
                  <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.height}</td>
                    <td>{person.mass}</td>
                    <td>{person.hair_color}</td>
                  </tr>
                )
              })
              : <Loading />
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default withLoading(Home);