function Footer(props){
    return (<>
        <footer> 
            <PlusMinus section="footer" handle={props.handle}/>
            <div className="section">Footer:{props.data.footer}</div>
            <Display data={props.data}/> 
        </footer> 
    </>);
}