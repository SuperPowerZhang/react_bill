import { connect } from 'react-redux'
import Tags from "../views/Tags";
import {addTag} from "../store/actions";

// @ts-ignore
const mapStateToProps = state => {
    return {
       tags:state.tags
    }
}
// @ts-ignore
const mapDispatchToProps=dispatch=>{
    return{
        // @ts-ignore
        onAddTag:tag=>{
            dispatch(addTag({id:666,name:'旅游'}))
        }
    }
}
const TagsDisplay = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags)

export default TagsDisplay
