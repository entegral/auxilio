import { getUserOrgs } from '../apis/auxilioServerApi';

export function getUserOrgsAction(requester_uid){
  return getUserOrgs(requester_uid)
    .then((response)=>{
      return {
        type: 'UPDATE_USER_SUBS',
        orgs: response
      }
    }).catch((response)=>{
      console.log('error in getUserOrg request', response.message)
    });
}

export function updateUserOrgAction(newUserOrgs){
  return {
    type: 'UPDATE_USER_SUBS',
    orgs: newUserOrgs
  };
};

export function updateSuggestedOrgActions(suggestedOrgs){
  return {
    type: 'UPDATE_SUGGESTED_SUBS',
    orgs: suggestedOrgs
  };
};