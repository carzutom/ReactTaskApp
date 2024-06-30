export const CONTACTS_RETRIEVED = 'CONTACT:RETRIEVED'
export const TOGGLE_LOADING = 'CONTACT:LOADING:TOGGLED'

export const toggleLoading = (loading) => ({
  type: TOGGLE_LOADING,
  loading,
})

export const loadContacts = (contacts) => ({
  type: CONTACTS_RETRIEVED,
  contacts,
})
