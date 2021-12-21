export default class HTTP {
  fetchGet (options) {
    console.log(options.url)
    return fetch(options.url, {
      method: 'GET'
    })
      .then((response) => {
        return response.json()
      })
      .then((responseJson => {
        options.success(responseJson)
      }))
      .catch((error) => {
        options.error(error)
      })
  }
}
