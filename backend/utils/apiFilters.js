
// A class for adding search API to our project to enable users search with ease

// So I can search for a product with a specific keyword
class APIFilters {
constructor(query, queryStr){
    this.query = query
    this.queryStr = queryStr
}
search(){
const keyword = this.queryStr.keyword ? {
    name: {
        $regex: this.queryStr.keyword,
        $options: 'i'
    }
}: {};
this.query = this.query.find({...keyword})
return this;
}
}
export default APIFilters;