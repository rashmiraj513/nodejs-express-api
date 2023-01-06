import { addNewContact, getContacts, getContactById, updateContactById, deleteContactById } from "../controllers/apiController";

const routes = (app) => {
  app.route('/contact')
  // Get all contacts
  .get(getContacts)
  // Add a new contact
  .post(addNewContact)

  app.route('/contact/:contactId')
  // Get a specific contact by id
  .get(getContactById)
  // Update a specific contact by id
  .put(updateContactById)
  // Delete a specific contact by id
  .delete(deleteContactById)
}

export default routes;