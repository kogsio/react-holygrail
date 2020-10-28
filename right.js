function Right(props){
    return (<>
        <aside>
            <PlusMinus section="right" handle={props.handle}/>
            Right
            <Display data={props.data}/>            
        </aside>
    </>);
}