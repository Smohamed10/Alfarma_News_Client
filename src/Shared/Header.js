import React from 'react';
import logo_vid from"../images/footer_logo.png";
import { Navbar, Nav, Container ,NavDropdown,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { removeAuthUser, getAuthUser } from '../Helper/Storage';
import Breakingnews from '../Components/Breakingnews';
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
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                        <div className="topmenu text-center">
                            <ul className="list-inline">
                            <a href="https://www.facebook.com/share/ad4yX2ao2QedpxKL/?mibextid=qi2Omg" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="https://wa.me/+2001067554142" data-toggle="tooltip" data-placement="bottom" title="Whatsapp"><i className="fa fa-whatsapp"></i></a>
                            <a  href="https://www.instagram.com/elfaramanews?igsh=MXAyZ25oeDNqYnkyZQ==" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                                <li style={{ marginLeft:'1rem' }} className="list-inline-item"><a href="/Contact"><i className="fa fa-address-card-o"></i> تواصل معنا</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="topsearch text-right">
                        {!Auth ? (
    <Link to="/login">
        {/* Use transparent text and border color to make the button invisible */}
        <Button variant="warning" type="submit" style={{ color: 'transparent', border: 'none', backgroundColor: 'transparent', width: '80px', height: '50px', padding: '0', margin: '0', overflow: 'hidden' }} />
    </Link>
) : (
    <>
        <Link to="/postad">
            {/* Use transparent text and border color to make the button invisible */}
            <Button variant="warning" type="submit" style={{ color: 'white', border: 'none', backgroundColor: 'black', width: '200px', height: '50px', padding: '0', margin: '0', overflow: 'hidden' }}>
                نشر اعلان
            </Button>
        </Link>
        <Link to="/login">
            {/* Use transparent text and border color to make the button invisible */}
            <Button variant="warning" type="submit" style={{ color: 'black', border: 'none', backgroundColor: 'gold', width: '200px', height: '50px', padding: '0', margin: '0', overflow: 'hidden' }}>
                صفحة تسجيل الدخول
            </Button>
        </Link>
        <Link to="/post">
            {/* Use transparent text and border color to make the button invisible */}
            <Button variant="warning" type="submit" style={{ color: 'white', border: 'none', backgroundColor: 'black', width: '200px', height: '50px', padding: '0', marginRight: '22rem',margin:'0', overflow: 'hidden' }}>
                نشر خبر
            </Button>
        </Link>
    </>
)}

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
      <Navbar bg="light" expand="lg">
      {Auth && <Nav.Link onClick={Logout} className='btn btn-sm btn-danger mx-2 nav-link fixed-top' style={{ right: '80%',borderRadius: '100rem',marginRight: '-2.5rem'}}>تسجيل الخروج</Nav.Link>}

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
    <div id="breaking-news-container">
  <div id="breaking-news-colour" class="slideup animated">
    
  </div>  
   <span class="breaking-news-title delay-animated slidein">
   آخر الأخبار
    </span> 
<Breakingnews/>
</div>  
</div>
</div>

    );
};

export default Header;