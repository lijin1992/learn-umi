import Redirect from 'umi/Redirect';

export default props=>{
    if(Math.random()>0.5){
        return <Redirect to="/login"></Redirect> 
    }
    return (
        <div>
            {props.children}
        </div>
    )
}