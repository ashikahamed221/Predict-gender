async function predictgender() {

    let name = document.getElementById('name').value
    let result = document.getElementById('result')
    let accuracy = document.getElementById('accr')

    if(name==='')
    {
        result.innerHTML = 'Please Enter Your Name'
        return;
    }
    try{
      let apiurl = `https://gender-api.com/get?name=${name}&key=yourkey`

      let response = await fetch(apiurl)
      let data = await response.json()
      if(data.gender)
      {
        result.innerHTML = `The gender is ${data.gender}`
        accuracy.innerHTML = `The accuracy ${data.accuracy}`
      }
      else{
        result.innerHTML = 'Record not found';
      }
    }
    catch(error)
    {
        console.error(error)
    }
}
