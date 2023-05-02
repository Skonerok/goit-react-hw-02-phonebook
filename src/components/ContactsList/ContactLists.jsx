import React from 'react'
import css from './ContactsList.module.css';

export function ContactLists({contacts, deleteContact}) {
  return (
      <ul className={css.phonebook__list}>
          {contacts.map(contact => {
              return (
                <li className={css.phonebook__item} key={contact.id}>
                  <span>{contact.name}</span>:
                  <span>{contact.number}</span>
                  <button className={css.phonebook__delete} onClick={() => deleteContact(contact.id)}>Delete</button>
                  </li>
                )
          })}
    </ul>
  )
}
