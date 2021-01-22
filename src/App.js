import './index.css';
import React from 'react';
import {Elements} from './db2021';

function App() {
  const handleFocus = (event) => event.target.select();
  return (
    <div class="m-auto">
      <nav class="mx-auto">
          <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="">
              <div class="flex items-center">
                  <div class="flex items-baseline space-x-7 m-auto">
                  <a href="http://jayagonoy.xyz" class="text-sm">jayagonoy.xyz</a>
                    <h1 class="bg-gray-900 text-white px-3 py-2 rounded-md"><strong>anicredits<sup>v2</sup></strong></h1>
                    <form class="flex items-center justify-between h-16">
                      <div class="col-span-3 sm:col-span-2">
                        <div class="mt-1 flex items-center content-center rounded-md">
                          <div class="">
                            <input type="text" name="search" id="search" class="border-2 w-96 px-4 py-1.5 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Search Anime..."/>
                        </div>
                        <span class="mt-1 ml-4">
                          <div class="flex items-start">
                            <div class="">
                              <input id="toggleEN" name="toggleEN" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="toggleEN" class="font-medium text-gray-700">EN Text</label>
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

      <div class="container w-900 mx-auto pt-5">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-blue-800 text-white">
                  <tr>
                    <th scope="col" width="30%" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Series Name
                    </th>
                    <th scope="col" width="70%" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Attribution
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                {Elements.map((a) => (
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {a.titleEN}
                          </div>
                          <div class="text-sm text-gray-500">
                            {a.titleJP}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex text-sm text-gray-900 ">
                        <input type="text" class="border-2 rounded border-blue-500 w-full 100vw p-5" value={a.contentJP} onClick={handleFocus}/>
                        <input type="text" class="border-2 rounded border-blue-500 w-full 100vw p-5" value={a.contentEN} onClick={handleFocus}/>
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
