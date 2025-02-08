
function fetchStudentData(){
    const tbody = document.querySelector('#tbody')
    tbody.innerHTML = ''

    Students.forEach((element) => {
        if(element.deleted_at){
            return
        }

        tbody.innerHTML += `
        <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                            >
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    ${element.firstname}
                                </th>
                                <td class="px-6 py-4">${element.lastname}</td>
                                <td class="px-6 py-4">${element.phoneNumber}</td>
                                <td class="px-6 py-4">
                                    <label class="inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox" ${element.status ? 'checked' : '' } value="" class="sr-only peer">
                                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="inline-flex rounded-md shadow-xs" role="group">
                                        <button onclick="editStudent(${element.id})" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-green-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-green-700 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
                                                <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                        <button onclick="deleteStudent(${element.id})" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-red-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-700 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
        ` 
    })
}

fetchStudentData()

function saveNewStudent(){
    let firstname = document.querySelector('#firstname');
    let lastname = document.querySelector('#lastname');
    let number = document.querySelector('#number');
    let status = document.querySelector('#status');

    if(firstname.value == '' || lastname.value == '' || number.value == '', status.value == ''){
        alert('Malumotlarni toliq kiriting')
        return 
    }

    let maxId = getMaxId()
    Students.push({
        id: maxId + 1,
        firstname: firstname.value,
        lastname: lastname.value,
        phoneNumber: number.value,
        status : status.value,
        deleted_at: null
    })
    fetchStudentData()

    firstname.value = '';
    lastname.value = '';
    status.value = '';
    number.value = '';
    document.querySelector("#close-create-button").click()
}


function getMaxId(){
    let id = 1;
    Students.forEach((element)=>{
        id = element.id
    })

    return id
}

function editStudent(id){
    console.log(id)
}

function deleteStudent(id){

    Students.forEach((student) => {
        if(student.id == id){
            student.deleted_at = tr
        }
    })

    fetchStudentData()
}



function setLocalStorage(){
    let test = 'Azamjon';
    localStorage.setItem('firsname', test)
}


function removeLocalStorage(){
    localStorage.removeItem('firsname')
}


function getStorage(){
    let div = document.querySelector('#locale-storage')
    let name = localStorage.getItem('name')

    if(name){
        div.innerHTML = name
    }else{
        div.innerHTML = 'Hech narsa yoq'
    }
}

getStorage()