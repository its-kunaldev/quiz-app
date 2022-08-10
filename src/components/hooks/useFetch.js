import { useCallback, useState } from 'react'

const useFetch = () => {

    // const [allCategories, setAllCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const getData = useCallback((category = null, amount, difficulty, applyData) => {
    //     setIsLoading(true);
    //     if (!category) {
    //         fetch(`https://opentdb.com/api_category.php`)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setAllCategories(data.trivia_categories);
    //             })
    //             .catch(err => {
    //                 console.error(err);
    //             })
    //         }

    //         else {
    //             fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
    //             .then((response) =>  response.json() )
    //             .then((data) => {
    //                 applyData(data.results);
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //             setIsLoading(false);
    //         }
    //     }, []);


        const getData = useCallback(async (category = null, amount, difficulty, applyData) => {
            setIsLoading(true);
            try{
                const response = await fetch(category
                    ? `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}` 
                    : `https://opentdb.com/api_category.php`);

                if(!response.ok){
                    throw new Error('request failed');
                }
    
                const data = await response.json();

                category ? applyData(data.results) : applyData(data.trivia_categories);
            }
            catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        }, []);
        
    return {
        isLoading,
        getData
    };
};

export default useFetch;