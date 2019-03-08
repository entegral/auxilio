
export function getUserData(uid) {
  let jsonResponse;
  return fetch('http://localhost:3001/users/1', {
    method: 'GET',
    body: `uid=${uid}`
  }).then((response)=>{
    jsonResponse = response.json();
    console.log(jsonResponse);
    return jsonResponse;
  });
};