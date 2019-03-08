
export function getUserData(uid = '') {
  let jsonResponse;
  let url_string;
  uid ? url_string = `1?uid=${uid}` : url_string = '';
  return fetch(`http://localhost:3001/users/${url_string}`).then((response)=>{
    jsonResponse = response.json();
    console.log(jsonResponse);
    return jsonResponse;
  });
};