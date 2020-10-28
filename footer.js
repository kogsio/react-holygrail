function Footer(props){
    return (<>
        <footer> 
            <PlusMinus section="footer" handle={props.handle}/>
            Footer
            <Display data={props.data}/> 
        </footer> 
    </>);
}