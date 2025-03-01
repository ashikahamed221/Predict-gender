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
      let apiurl = `https://gender-api.com/get?name=${name}&key=3bc5efe3853ff102b8bb6e67ad91fd67f9945157f44a51a91a6ec9f0b456997e`

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
