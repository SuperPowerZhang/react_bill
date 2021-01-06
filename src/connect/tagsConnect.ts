import { connect } from 'react-redux'
import Tags from "../views/Tags";
import {addTag} from "../store/actions";
import {TagsSection} from '../views/bill/TagsSection'
import {Button} from "../components/Button";

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
            dispatch(addTag(tag))
        }
    }
}
const TagsDisplay = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags)

const TagsDisplay2 = connect(
    mapStateToProps,
    mapDispatchToProps
    // @ts-ignore
)(Tags2)

const TagAddButton = connect(
        mapDispatchToProps
)(Button)

export {TagsDisplay,TagAddButton,TagsDisplay2}
