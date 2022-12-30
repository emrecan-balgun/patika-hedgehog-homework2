import React, { useState } from 'react';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query';
import TableMobile from './TableMobile';

function Table({ head, body, searchable, loading }) {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [search, setSearch] = useState('');
  const [sorting, setSorting] = useState(false);
  const filteredData =
    body &&
    body
      .filter(
        (items) => (items) =>
          items.some((item) =>
            (item?.key || item?.props?.searchableText || item)
              .toString()
              .toLocaleLowerCase('TR')
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

  if ((!body || body?.length === 0) && !loading)
    return (
      <div className="p-4 rounded bg-yellow-100 text-yellow-700 text-sm">
        No data
      </div>
    );

  return (
    <>
      {searchable && (
        <div className="mb-4 flex gap-x-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Tabloda ara"
            className="h-10 border rounded text-sm px-4 outline-none focus:border-black w-full border-gray-300"
          />
          {sorting && (
            <button
              onClick={() => setSorting(false)}
              className="h-10 rounded border border-red-500 text-red-500 text-sm px-4"
            >
              Reset Filter
            </button>
          )}
        </div>
      )}
      {isMobile && <TableMobile head={head} body={filteredData} />}
      {!isMobile && (
        <div className="w-full border rounded p-4">
          <table className="w-full">
            <thead>
              <tr>
                {head.map((head, key) => (
                  <th
                    width={head?.width}
                    className="text-left text-sm bg-gray-50 font-semibold text-gray-500 p-3 border-b"
                    key={key}
                  >
                    <div className="inline-flex items-center gap-x-2">
                      {head.name}
                      {head.sortable && (
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
                              <FaSortUp size={14} />
                            ) : (
                              <FaSortDown size={14} />
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
              {filteredData &&
                filteredData.map((items, key) => (
                  <tr className="group" key={key}>
                    {items.map((item, index) => (
                      <td
                        className="p-3 text-sm group-hover:bg-blue-50 group-hover:text-blue-600"
                        key={index}
                      >
                        {Array.isArray(item) ? (
                          <div className="flex gap-x-2.5">{item}</div>
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

export default Table;
