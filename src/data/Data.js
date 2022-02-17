import './Data.css';

const Data=({data1, data2})=>{
    return(
    <div className='Data'>
        <span className='number'>{data1}</span>
        <span>{data2}</span>
    </div>
    )
}

export default Data;