
import data from './data'

// api/popular
export default function handler(req, res){
    const { Popular } = data;

    if(Popular) return res.status(200).json(Popular);
    return res.status(404).json({ error : "Data Not Found"})
}