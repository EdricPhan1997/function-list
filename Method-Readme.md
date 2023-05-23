1. createRef
   const editInput = createRef<HTMLInputElement>();

2. onBlurEdit
   const onBlurEdit = (e: React.FocusEvent<HTMLInputElement>): void =>{...}
   onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlurEdit(e)}

3. submitEditText
   const submitEditText = (e: React.KeyboardEvent<HTMLInputElement>): void => {...}

   - e.key === "Enter" || e.key === "Escape"

   onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
   submitEditText(e)
   }

4. handleTodoTextEdit, toggleAllCheckbox

const handleTodoTextEdit = (e: React.ChangeEvent<HTMLInputElement>, onEdit: Todo["id"]) => {...}
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
handleTodoTextEdit(e, todo.id)
}

5. Arr.map()
   Arr.map((t: Todo): ReactElement => {...}

6. onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlurEdit(e)}

7. onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
   handleTodoTextEdit(e, todo.id)
   }

8. onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
   submitEditText(e)
   }

// thanh toan
https://www.youtube.com/watch?v=Z-4MaR8tP4Y
https://github.com/nhatlong19/demo-paypal
https://www.youtube.com/watch?v=sa9XtaKcSvo
