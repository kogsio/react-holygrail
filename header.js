function Header(props){
    return (<>
        <header>
            <PlusMinus section="header" handle={props.handle}/>
            Header
            <Display data={props.data}/>
        </header>
    </>);
}


