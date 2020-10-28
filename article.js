function Article(props){
    return (<>
        <article> 
            <PlusMinus section="article" handle={props.handle}/>
            Article
            <Display data={props.data}/>
        </article>
    </>);
}