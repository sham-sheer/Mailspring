// Contact storage
export const BEGIN_STORE_CONTACTS = 'BEGIN_STORE_CONTACTS';
export const SUCCESS_STORE_CONTACTS = 'SUCCESS_STORE_CONTACTS';
export const FAIL_STORE_CONTACTS = 'FAIL_STORE_CONTACTS';

// Contact retrieval
export const RETRIEVE_STORED_CONTACTS = 'RETRIEVE_STORED_CONTACTS';
export const FAIL_RETRIEVE_STORED_CONTACTS = 'FAIL_RETRIEVE_STORED_CONTACTS';
export const UPDATE_STORED_CONTACTS = 'UPDATE_STORED_CONTACTS';

// Contact storage
export const storeContacts = contacts => ({ type: BEGIN_STORE_CONTACTS, payload: contacts });

export const successfullyStoredContacts = contacts =>
  ({ type: SUCCESS_STORE_CONTACTS, payload: contacts });

export const failedStoringContacts = (error, contacts) =>
  ({ type: FAIL_STORE_CONTACTS, payload: { error, contacts } });

// Contact retrieval
export const retrieveContacts = () => ({ type: RETRIEVE_STORED_CONTACTS });

export const failedRetrievingContacts = error =>
  ({ type: FAIL_RETRIEVE_STORED_CONTACTS, payload: error });

export const updateStoredContacts = contacts =>
  ({ type: UPDATE_STORED_CONTACTS, payload: contacts });