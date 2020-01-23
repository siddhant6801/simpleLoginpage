import React from 'react';
import './Label.css';
function Label(){
return(
    <form>
        <label>
            Name:
                        <input type='text' name='name'/>
        </label>
        <br/>
        <label>
            surname:
            <input type='text' name='surname'/>
            </label>
            <br/>
            <input type='submit' value='submit'/>
     </form>

    );
}

export default Label;