for (const viloyatNomi in uzbekistanRegions) {
  let accordion= document.getElementById("accordion-nested-parent");

  const region = uzbekistanRegions[viloyatNomi];
  let tumanlar = "";
  for (const tumanNomi in region.districts) {
    const tuman = region.districts[tumanNomi];

    tumanlar += tuman_function(tuman.id,tuman.name,region.id, tuman.mahallas);
  }
  accordion.innerHTML += viloyat(region.id,region.name,tumanlar);
}

let districtCounter = 1;

function addDistrictInput() {
    const container = document.getElementById('districts-container');
    const districtDiv = document.createElement('div');
    districtDiv.className = 'district-input flex gap-2 items-end';
  
    districtDiv.innerHTML = `
        <div class="flex-1">
            <label for="tuman_${districtCounter}" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tuman ${districtCounter}</label>
            <input type="text" id="tuman_${districtCounter}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." required />
        </div>
        <button type="button" onclick="removeDistrict(this)" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center h-[42px]">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    `;
    container.appendChild(districtDiv);
    districtCounter++;
}

function removeDistrict(button) {
  button.parentElement.remove();
}

function addNewRegion() {
    const region_name = document.querySelector('#region_name').value;
    if (!region_name) return;

    const accordion = document.getElementById("accordion-nested-parent");
    let tumanlar = "";

    const districtInputs = document.querySelectorAll('.district-input input');


    districtInputs.forEach((input, index) => {
        const tumanNomi = input.value;
        
        if (tumanNomi) {
            tumanlar += tuman_function(
                `${region_name}_${tumanNomi}_${(index + 1).toString().padStart(2, '0')}`,
                tumanNomi,
                region_name,
                ['mahalla 1', 'mahalla 2']
            );
        }
    });

    accordion.innerHTML += viloyat(region_name, region_name, tumanlar);
    document.querySelector('#region_name').value = '';
    document.getElementById('districts-container').innerHTML = '';

    districtCounter = 1;
    initFlowbite()

    const modal = document.getElementById('close-modal');
    if (modal) {
        modal.click();
    }
}