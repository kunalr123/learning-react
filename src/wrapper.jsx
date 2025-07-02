function Wrapper({children,color="green"}) {
    return (
    <div style={{color:color, border:"solid 5px green"}} >
        {children}
    </div>
    )
}

export default Wrapper;