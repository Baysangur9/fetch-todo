const USERS_URL = "https://jsonplaceholder.typicode.com/todos"


const ul = document.createElement('.ul_text')
const input = document.createElement('input')

const getTodos = async () => {
    try {
         
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?&_limit=10')
        const res = res.json()

        res.forEach(element => {
            // Создание всех элементов

            const checkbox = document.createElement('input')
            const li = document.createElement('li')
            const p = document.createElement('p')
            const btnDel = document.createElement('button')
            btnDel.className = "btn_del"

            // Отрисовка на странице


            p.textContent = element.title
            checkbox.type = "checkbox"
            checkbox.checked = element.completed
            li.style.listStyle = "none"
            btnDel.textContent = "DELETE"
            li.append(checkbox)
            li.append(p)
            li.append(btnDel)
            ul.append(li)

            btnDel.addEventListener('click', () => {
                deleteUser(element.id, li)
            })
             
            // Измение стилей по клику
            checkbox.addEventListener('change', (e) => {
                handleChange(element.id, element)
                if (element.completed) {
                  p.style.textDecoration = "none"
                  e.target.parantElement.style.opacity ="1"
                }else{
                    p.style.textDecoration ="line-through"
                    e.target.parantElement.style.opacity = "0.5"
                }
            })
        })
        

    }  catch (error) {
        console.log(error)
    }
   
}
getTodos()

// Клик добавления

const btnAdd = document.querySelector('.btn_add')
btnAdd.addEventListener('click', ()=> {
    addUser(input.value)
    getTodos()
})


// Удаления пользователя

const deleteUser = async(text) => {
    const response = await fetch(`${USERS_URL}/${id}`,{
        method: "DELETE"
    })
    if(response.ok){
        console.log('Пользователя успешно удалили')
        parantElement.remove()
    }
}


// Добавления пользователя


const addUser = async(text) => {
    const response = await fetch(USERS_URL,{
        method:"POST",
        headers: {"Content-Type":"application/json;charset=UTF=8"},
        body: JSON.stringify({title: text, completed:true})
    })
    if(response.ok){
        console.log('Пользователя успешно добавили')
    }
}

// Изменения пользователя

const handleChange = async(id,key) => {
    const pesponce = await fetch(`${USERS_URL}/${id}`,{
        method: "PATCH",
        headers: {"Content-Type":"application/json;charset=UTF=8"},
        body:JSON.stringify({completed:true})

    })
    if(response.ok){
        console.log('Пользователя успешно изменили')
        key.completed = !key.completed
    }
}


    
       