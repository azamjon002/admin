function tuman_function(id,name,viloyatId, mahallas) {
  return `<h2 id="accordion-nested-collapse-heading-${id}">
                <button type="button" class="w-full p-5 rounded-t-xl font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-${viloyatId}" aria-expanded="false" aria-controls="accordion-nested-collapse-body-${viloyatId}">
                  <span class="text-blue-600">${name}</span>
                  <div>${mahallas}</div>
                </button>
              </h2>


              
              <div id="accordion-nested-collapse-body-${viloyatId}" class="hidden" aria-labelledby="accordion-nested-collapse-heading-${id}">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="text-gray-500 dark:text-gray-400">Mahallalar</p>
                </div>
              </div>`;
} 