
export function getUserData(uid) {
  let jsonResponse;
  return fetch('http://localhost:3001/users/').then((response)=>{
    jsonResponse = response.json();
    console.log(jsonResponse);
    return jsonResponse;
  });
};