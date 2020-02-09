import React, {useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
  }

const TodoForm: React.FC <TodoFormProps> = (props) => {

/*  const [title, setTitle] = useState<string>('');
    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            console.log(title);
            setTitle('');
        }
    } */

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter' && ref.current){
            props.onAdd(ref.current.value);
            ref.current.value="";
        }
    }

    return (
        <div className="input-field mt2">
            <input 
                //value={title} 
                //onChange={changeTitle}
                ref={ref}
                onKeyPress={keyPressHandler} 
                type="text" id="title" placeholder="Введите текст"/>
            <label htmlFor="title" className="active">Добавить новую задачу</label>
        </div>
    );
}

export default TodoForm;
