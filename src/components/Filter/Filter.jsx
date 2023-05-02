import React from 'react'
import css from './Filter.module.css';
 
export function Filter({handleChange, value}) {
   return (
       <div>
       <input
         className={css.contacts__input}
         type="text" value={value}
         onChange={handleChange}
         name="filter"
         placeholder='Search...' />
     </div>
   )
 }
 