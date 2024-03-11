import React from 'react';
import logo_vid from"../images/footer_logo.png";
import { Navbar, Nav, Container ,NavDropdown,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { removeAuthUser, getAuthUser } from '../Helper/Storage';
const CustomNavDropdown = ({ title, children, id }) => {
    return (
        <NavDropdown title={title} id={id}>
            {children}
        </NavDropdown>
    );
}


const Header = () => {
    const Auth=getAuthUser();
    const navigate = useNavigate();
  
      const Logout = () => { 
      removeAuthUser();
      navigate('/');
      }
  
    return (
<div>
    <div id="wrapper">
        <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                            <a href=" " data-toggle="tooltip" data-placement="bottom" title="Google+"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                        <div className="topmenu text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="blog-category-01.html"><i className="fa fa-star"></i> Trends</a></li>
                                <li className="list-inline-item"><a href="blog-category-02.html"><i className="fa fa-bolt"></i> الأكثر رواجا</a></li>
                                <li className="list-inline-item"><a href="page-contact.html"><i className="fa fa-user-circle-o"></i> تواصل معنا</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                        <Link to="/login">
            {/* Use transparent text and border color to make the button invisible */}
            <Button variant="warning" type="submit" style={{ color: 'transparent', border: 'none', backgroundColor: 'transparent', width: '50px', height: '40px', padding: '0', margin: '0', overflow: 'hidden' }} />
        </Link>    
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
      <Navbar bg="light" expand="lg">
      {Auth && <Nav.Link onClick={Logout} className='btn btn-sm btn-danger mx-2'>تسجيل الخروج</Nav.Link>}

        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <CustomNavDropdown title="المزيد" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">الموقع الاول</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">الموقع الثاني </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">الموقع الثالث</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">الموقع الرابع </NavDropdown.Item>
            </CustomNavDropdown>
            <Nav.Link as={Link} to="/Technology">تكنولوجيا</Nav.Link>
            <Nav.Link as={Link} to="/World">عالم</Nav.Link>
            <Nav.Link as={Link} to="/Accident">حوادث</Nav.Link>
            <Nav.Link as={Link} to="/Governorate">محافظات</Nav.Link>
            <Nav.Link as={Link} to="/Economy">اقتصاد</Nav.Link>

            <Nav.Link as={Link} to="/Petrol">بترول</Nav.Link>

            {/*            <CustomNavDropdown title="بترول" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">الموقع الاول</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">الموقع الثاني </NavDropdown.Item>
            </CustomNavDropdown>*/}
              <Nav.Link as={Link} to="/Sports">رياضة</Nav.Link>
               <Nav.Link as={Link} to="/Art">فن</Nav.Link>
              <Nav.Link as={Link} to="/Education">تعليم</Nav.Link>
            <Nav.Link as={Link} to="/Health">صحة</Nav.Link>


            <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>

            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/" className="logo">
            <span className="Ankh"></span><img src={logo_vid} alt='logo'/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
</div>
</div>

    );
};

export default Header;