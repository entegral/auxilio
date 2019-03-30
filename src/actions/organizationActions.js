
export function getUserOrgsAction(userOrgs){
  return {
    type: 'UPDATE_USER_SUBS',
    orgs: userOrgs
  }
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

export function setCurrentOrg(orgUid){
  return {
    type: 'SET_CURRENT_ORG',
    orgUid: orgUid
  };
};