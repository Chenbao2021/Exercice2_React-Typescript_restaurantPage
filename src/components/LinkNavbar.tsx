import { Link } from "react-router-dom";

interface linkNavbarProps  {
  page:{
    page: string;
  },
  currentPage:string,
  pageName: string,
  pageNameDisplay: string,
}
function LinkNavbar(props:linkNavbarProps) {
  return (
    <Link to={props.pageName} state={{ some: "value" }} onClick={() => props.page.page = props.pageName} style={{ color: props.currentPage === props.pageName ? 'blue' : 'none' }} >{props.pageNameDisplay}</Link>
  )
}

export default LinkNavbar