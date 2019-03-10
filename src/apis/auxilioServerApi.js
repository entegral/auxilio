
export function getUserData(uid = '') {
  let jsonResponse;
  let url_string;
  uid ? url_string = `1?uid=${uid}` : url_string = '';
  return fetch(`https://desolate-plains-77764.herokuapp.com/users/${url_string}`).then((response)=>{
    console.log('raw api result',response);
    jsonResponse = response.json();
    return jsonResponse;
  });
};

export function saveUserData(email, uid, first_name='', last_name=''){
  return fetch(`https://desolate-plains-77764.herokuapp.com/users?email=${email}&uid=${uid}&first_name=${first_name}&last_name=${last_name}`, {
    method: 'POST'
  }).then((response)=>{
    return response.json();
  });
};

export function updateUserData(id, uid, first_name='', last_name=''){
  return fetch(`https://desolate-plains-77764.herokuapp.com/users/${id}?uid=${uid}&first_name=${first_name}&last_name=${last_name}`, {
    method: 'PATCH'
  }).then((response)=>{
    return response.json();
  });
};