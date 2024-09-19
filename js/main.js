document.querySelector('#cdForm').addEventListener('submit', (e) => {
    e.preventDefault()
 
    const author = document.querySelector("#author").value
    const title = document.querySelector("#title").value
    const year = document.querySelector("#year").value

    const newCDRow = document.querySelector('#cdTemplate').content.cloneNode(true);

    
    if (author && title && year){
        
        newCDRow.querySelector('.author').textContent = author;
        newCDRow.querySelector('.title').textContent = title;
        newCDRow.querySelector('.year').textContent = year;
        newCDRow.querySelector('.deleteBtn').addEventListener('click', deleteCD);
        
        document.querySelector('#tableBody').appendChild(newCDRow);
        
        cdForm.reset();

    } else {
        console.log('error: input missing value')
        showToast('please fill out all fields.', 3000)
    }

});

function deleteCD(){
    this.closest('tr').remove();
}

function showToast(message, duration = 3000) {
            const toast = document.getElementById('toast');

            toast.textContent = message;

            toast.classList.add('showToast');

            setTimeout(() => {
                toast.classList.remove('showToast');
            }, duration);
        }