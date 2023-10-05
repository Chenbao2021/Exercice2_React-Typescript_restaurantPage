import { Link } from "react-router-dom";

interface linkNavbarProps  {
  page:{
    page: string;
  },
  currentPage:string,
  pageName: string,
  pageNameDisplay: string,
  setModal?: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}
function LinkNavbar(props:linkNavbarProps) {
  return (
    <Link to={props.pageName} state={{ some: "value" }} onClick={() => {props.page.page = props.pageName; if(props.setModal) {props.setModal(false); }}} style={{ color: props.currentPage === props.pageName ? 'blue' : 'black' }} >{props.pageNameDisplay}</Link>
  )
}

export default LinkNavbar