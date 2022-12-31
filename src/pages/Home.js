import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { getAllPeople } from '../services/swapi';
import { successRemoveNotify, failRemoveNotify } from '../constants/toastify';
import withLoading from '../hoc/withLoading';
import Table from '../components/Table';

function Home({ setLoading, loading }) {
  const items = JSON.parse(localStorage.getItem('isSignedIn'));
  const navigate = useNavigate();

  const submit = (key) => {
    confirmAlert({
      title: 'Confirm to remove',
      message: 'Are you sure about removing this person?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleRemove(key),
        },
        {
          label: 'No',
          onClick: () => failRemoveNotify(),
        },
      ],
    });
  };

  useEffect(() => {
    if (!items) {
      navigate('/');
    }
  }, [items]);

  const [peopleData, setPeopleData] = useState([]);

  const tableHead = [
    { name: 'Name', sortable: true },
    { name: 'Height', sortable: true },
    { name: 'Gender', sortable: true },
    // { name: 'Films', sortable: true },
    { name: 'Remove', width: 100 },
  ];
  const tableBody =
    peopleData &&
    peopleData.map((person, key) => [
      person.name,
      person.height,
      person.gender,
      // person.films,
      [
        <button
          onClick={() => submit(key)}
          className="h-8 px-4 flex items-center justify-center rounded bg-red-600 text-white"
        >
          Remove
        </button>,
      ],
    ]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getAllPeople();
      if (response.status === 200) {
        setPeopleData(response.data.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = (key) => {
    const tempPeople = [...peopleData];
    tempPeople.splice(key, 1);
    setPeopleData(tempPeople);
    successRemoveNotify();
  };

  return (
    <div className="h-screen p-4">
      <Table
        searchable={true}
        head={tableHead}
        body={tableBody}
        loading={loading}
      />
    </div>
  );
}

export default withLoading(Home);
