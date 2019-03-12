import { getUserOrgs } from '../apis/auxilioServerApi';

export function getUserOrgsAction(requester_uid){
  return getUserOrgs(requester_uid)
    .then((response)=>{
      return {
        type: 'GET_USER_ORGS',
        orgs: response
      }
    }).catch((response)=>{
      console.log('error in getUserOrg request', response.message)
    });
}

