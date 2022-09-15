    import React from 'react';
    import Card from './Card';
    import './CardList.css';
    // passing robots array as props to CardList const robots array gets imported
    //NOTE 
    //* TO form an array of cards use map as its convenient in jS to use map to 
    //*return modified elements with props 
    //todo MAP syntax:
    //             const map_array = array.map(element,i) => {
    //                 return component \
    //                 which contains properties values that changes for each array value using parameter = element
    //  }
    //pure components
    const CardList = ({ robots })=> {
        
        const cardsArray = robots.map((user,i) => {
            return(
                <Card 
                    key= {i} 
                    id={robots[i].id}    
                    name={robots[i].name} 
                    email ={robots[i].email } 
                    />
                );
        })

    // use</> when returning object
        return(
            <div>
                {cardsArray}
            </div>
        )
    }
    //*Keys are used in React to identify which items in the list are changed, updated, or deleted
    //?A “key” is a special string attribute you need to include when creating lists of elements in React
    //? Always include curly braces to return a function or an object as of array as in JSX
    export default CardList;