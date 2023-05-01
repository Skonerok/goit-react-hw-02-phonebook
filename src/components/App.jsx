import { ContactsForm } from "./ContactsForm/ContactsForm";
import React, { Component } from 'react'

export class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  handleAddContact = (contact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  }
  
  render() {
    return (
      <>
        <ContactsForm addContact={this.handleAddContact} />
      </>
    );
  }
};
