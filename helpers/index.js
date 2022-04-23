export const formatDate = date =>{
    const newDate = new Date(date);

    const options = {
        year: 'numeric',
        month: 'long',
        date: '2-digit'
    }
    return newDate.toLocaleDateString('en-GB', options)
}