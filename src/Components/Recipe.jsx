import Markdown from 'react-markdown'
export default function Recipe(props){
    return(
        <section className="suggested-recipe-container">
            <h1>Recipe Recommeded:</h1>
        <Markdown>{props.recipe}</Markdown>
        </section>
    )
}