function Left(props){
    return (<>
        <aside> 
            <PlusMinus section="left" handle={props.handle}/>
            Left
            <Display data={props.data}/>
        </aside>
    </>);
}