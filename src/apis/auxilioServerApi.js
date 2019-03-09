
export function getUserData(uid = '') {
  let jsonResponse;
  let url_string;
  uid ? url_string = `1?uid=${uid}` : url_string = '';
  return fetch(`http://localhost:3000/users/${url_string}`).then((response)=>{
    jsonResponse = response.json();
    console.log(jsonResponse);
    return jsonResponse;
  });
};

export function saveUserData(email, uid){
  return fetch(`http://localhost:3000/users?email=${email}&uid=${uid}`, {
    method: 'POST'
  }).then((response)=>{
    return response.json();
  });
};