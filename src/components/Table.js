import { useState } from 'react';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import { useMediaQuery } from '@react-hook/media-query';
import Select from 'react-select';

import TableMobile from './TableMobile';

export default function Table({ head, body, searchable, loading }) {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const options = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
  ];

  const [gender, setGender] = useState('');
  const [sorting, setSorting] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [search, setSearch] = useState('');
  const filteredData =
    body &&
    body
      .filter(
        (items) =>
          // gender ? items.some((item) => item === gender) : ''
          // ||
          items.some((item) =>
            (item?.key || item?.props?.searchableText || item)
              .toString()
              .toLocaleLowerCase('TR')
              // .includes(search.toLocaleLowerCase('TR') || gender.toLocaleLowerCase('TR'))
              .includes(search.toLocaleLowerCase('TR'))
          )
      )
      .sort((a, b) => {
        if (sorting?.orderBy === 'asc') {
          return (
            a[sorting.key]?.key ||
            a[sorting.key]?.props?.searchableText ||
            a[sorting.key]
          )
            .toString()
            .localeCompare(
              b[sorting.key]?.key ||
                b[sorting.key]?.props?.searchableText ||
                b[sorting.key]
            );
        }
        if (sorting?.orderBy === 'desc') {
          return b[sorting.key].toString().localeCompare(a[sorting.key]);
        }
      });

  if ((!body || body?.length === 0) && !loading) {
    return (
      <div className='p-4 rounded bg-yellow-100 text-yellow-700 text-sm'>
        No data
      </div>
    );
  }

  const handleFiltering = () => {
    setGender('');
    setSearch('');
    setFiltering(false);
  }

  return (
    <>
      {searchable && (
        <div className='mb-4 flex gap-x-2'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Tabloda ara'
            className='h-10 outline-none focus:border-black border rounded text-sm px-4 w-full border-gray-300'
          />
          <Select
            options={options}
            onChange={(e) => setGender(e.value)}
            placeholder={'Gender'}
            className='w-full'
          />
          {gender && (
            <button
              onClick={() => handleFiltering()}
              className='h-10 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4'
            >
              Reset filter
            </button>
          )}
          {sorting && (
            <button
              onClick={() => setSorting(false)}
              className='h-10 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4'
            >
              Reset sort
            </button>
          )}
        </div>
      )}
      {isMobile && <TableMobile head={head} body={filteredData} />}
      {!isMobile && (
        <div className='w-full  border rounded p4'>
          <table className='w-full'>
            <thead>
              <tr>
                {head.map((headItem, key) => (
                  <th
                    width={headItem?.width}
                    className='text-left bg-gray-50 text-sm font-semibold text-gray-500 p-3 border-b'
                    key={key}
                  >
                    <div className='inline-flex items-center gap-x-2'>
                      {headItem.name}
                      {headItem.sortable && (
                        <button
                          onClick={() => {
                            if (sorting?.key === key) {
                              setSorting({
                                key,
                                orderBy:
                                  sorting.orderBy === 'asc' ? 'desc' : 'asc',
                              });
                            } else {
                              setSorting({
                                key,
                                orderBy: 'asc',
                              });
                            }
                          }}
                        >
                          {sorting?.key === key &&
                            (sorting.orderBy === 'asc' ? (
                              <FaSortDown size={14} />
                            ) : (
                              <FaSortUp size={14} />
                            ))}
                          {sorting?.key !== key && <FaSort size={14} />}
                        </button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((items, key) => (
                <tr className='group' key={key}>
                  {items.map((item, key) => (
                    <td
                      className='p-3 text-sm group-hover:bg-blue-50 group-hover:text-blue-600'
                      key={key}
                    >
                      {Array.isArray(item) ? (
                        <div className='flex gap-x-2.5'>{item}</div>
                      ) : (
                        item
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}