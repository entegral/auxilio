import v4 from 'uuid';

const link = 'https://gentle-bayou-70994.herokuapp.com/';
// const link = 'http://localhost:3000/';

export function getUserData(uid = '') {
  let jsonResponse;
  let url_string;
  uid ? url_string = `1?uid=${uid}` : url_string = '';
  return fetch(`${link}users/${url_string}`).then((response)=>{
    jsonResponse = response.json();
    return jsonResponse;
  });
};

export function saveUserData(email, uid, first_name='', last_name=''){
  return fetch(`${link}users?email=${email}&uid=${uid}&first_name=${first_name}&last_name=${last_name}`, {
    method: 'POST'
  }).then((response)=>{
    return response.json();
  });
};

export function updateUserData(uid, first_name, last_name){
  const action='updateUser'
  return fetch(`${link}userActions?requester_uid=${uid}&first_name=${first_name}&last_name=${last_name}&apiAction=${action}`, {
    method: 'POST'
  }).then((response) => {
    return response.json();
  });
};


export function createNewOrg(requester_uid, org_name){
  const org_uid = v4();
  return fetch(`${link}organizations?requester_uid=${requester_uid}&uid=${org_uid}&name=${org_name}`, {
    method: 'POST'
  }).then((response)=>{
      return response.json();
    });
};

export function getUserOrgs(requester_uid) {
  return fetch(`${link}organizations?requester_uid=${requester_uid}`)
    .then((response) => {
      return response.json();
    })
}

export function addExistingOrgToUser(requester_uid, org_uid, org_password = null) {
  const action = 'addExistingOrgToUser';
  let object = {}
  if (org_password){
    object = {
      requester_uid: requester_uid,
      org_uid: org_uid,
      org_password: org_password,
      apiAction: action
     }
  } else {
    object = {
      requester_uid: requester_uid,
      org_uid: org_uid,
      apiAction: action
     }
  }


  return fetch(`${link}userActions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object)
  }).then((response)=>{
    return response.json();
  })
}

export function addNewOrgToUser(requester_uid, org_name, org_password = null) {
  const org_uid = v4();
  const action = 'addNewOrgToUser'

  let object = {};

  if (org_password){
    object = {
      requester_uid: requester_uid,
      org_uid: org_uid,
      org_name: org_name,
      org_password: org_password,
      apiAction: action
     }
  } else {
    object = {
      requester_uid: requester_uid,
      org_uid: org_uid,
      org_name: org_name,
      apiAction: action
     }
  }

  return fetch(`${link}userActions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( object )
  }).then((response) => {
    return response.json();
  });
};

export function removeOrgFromUser(requester_uid, org_uid) {
  const action = 'removeOrgFromUser'
  
  return fetch(`${link}userActions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
      requester_uid: requester_uid,
      org_uid: org_uid,
      apiAction: action
     })
  }).then((response) => {
    return response.json();
  });
}

export function getPublicOrgs(requester_uid) {
  const action = 'getPublicOrgs'
  return fetch(`${link}userActions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
      requester_uid: requester_uid,
      apiAction: action
     })
  }).then((response) => {
    return response.json();
  });
}