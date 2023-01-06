import mongoose from "mongoose";
import { ContactSchema } from '../models/apiModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if(err) res.send(err);
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if(err) res.send(err);
    res.json(contact);
  });
};

export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if(err) res.send(err);
    res.json(contact);
  });
};

export const updateContactById = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    if(err) res.send(err);
    res.json(contact);
  });
};

export const deleteContactById = (req, res) => {
  Contact.deleteOne({ _id: req.params.contactId }, (err) => {
    if(err) res.send(err);
    res.json({ message: 'Contact deleted successfully!'});
  });
};