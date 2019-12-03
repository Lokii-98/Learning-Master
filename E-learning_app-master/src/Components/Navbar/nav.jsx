import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
 class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_userId: sessionStorage.getItem('userId'),
      logged_userName: sessionStorage.getItem('userName'),
      videoSearch:"",
      sectionRequest:"",
      home:false,
      section:false,
      user:false,
      videoPage:false,
      dialog_visible: false,
      logged_out: false
    }
   
  }
 
  searchVideo=(event)=>{
    let value = event.target.value;
    let name = event.target.name;
    this.setState({[name]:value})

  }
 
  videos = ()=>{
    if(this.state.videoSearch===""){
      this.setState({videoPage:false})
    }
  else{
    this.setState({videoPage:true})
  }
}
  scroll_to = ()=>{
    window.scrollTo(0,0)
  }

  render() {
    return (
      <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand ml-sm-5 text-white" to="/" onClick={this.scroll_to}>Name</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse"
            id="navbarSupportedContent"
            name="videoSearch"
            value={this.state.videoSearch}
            onChange={this.searchVideo}
            >
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 search" type="search" placeholder="Search" style={{width:"550px"}}aria-label="Search" />
            <button className="btn btn-outline-success btn-lg text-white"
            onClick = {this.videos}
            type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </Link>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <Link className="dropdown-item " to="#">Action</Link>
                <Link className="dropdown-item" to="#">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">Something else here</Link>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/login">Home</Link>
            </li>
            {this.state.logged_userId ? <li className="nav-item">
              <Link className="nav-link text-white"  to="/User">
               <FontAwesomeIcon icon={faUserCircle} />
              {this.state.logged_userName}</Link>
            </li>:
               <Link className="nav-link" to="" ><FontAwesomeIcon icon={faUserCircle} />
                </Link>
              }
          </ul>
         
        </div>
      </nav>
      </Router>
      </>
    );
  }
}

export default NavigationBar;
