import './index.css';
import React from 'react';
import {Elements} from './db2021';

function App() {
  const handleFocus = (event) => event.target.select();
  return (
    <div className="flex flex-col">
      <nav className="">
          <div className="">
            <div className="">
              <div className="flex items-center">
                  <div className="flex items-baseline space-x-7 m-auto">
                  <a href="http://jayagonoy.xyz" className="text-sm">jayagonoy.xyz</a>
                    <h1 className="bg-gray-900 text-white px-3 py-2 rounded-md"><strong>anicredits<sup>v2-beta</sup></strong></h1>
                    <form className="flex items-center justify-between h-16">
                      <div className="col-span-3 sm:col-span-2">
                        <div className="mt-1 flex items-center content-center rounded-md">
                          <div className="">
                            <input type="text" name="search" id="search" className="border-2 w-96 px-4 py-1.5 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            value=""
                            placeholder="Search Anime..."
                            disabled
                            />
                        </div>
                        <span className="mt-1 ml-4">
                          <div className="flex items-start">
                            <div className="">
                              <input id="toggleEN" name="toggleEN" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" disabled/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="toggleEN" className="font-medium text-gray-700">EN Text</label>
                            </div>
                          </div>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
      </nav>

      <div className="mx-auto pt-5">
        <div className="-my-2 sm:-mx-6 lg:-mx-1 w-screen">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th scope="col" width="30%" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Series Name
                    </th>
                    <th scope="col" width="70%" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Attribution
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {Elements.map((a) => (
                  <tr key={Math.random().toString(36).substring(2)} id={Math.random().toString(36).substring(2)}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {a.titleEN}
                          </div>
                          <div className="text-sm text-gray-500">
                            {a.titleJP}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex text-sm text-gray-900 ">
                        <input type="text" className="border-2 rounded-l border-blue-500 w-full 100vw p-5" defaultValue={a.contentJP} onClick={handleFocus}/>
                        <input type="text" className="border-2 rounded-r border-blue-500 w-full 100vw p-5" defaultValue={a.contentEN} onClick={handleFocus}/>
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
