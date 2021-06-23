import React from 'react';
import './Team.css';
import {Container,Row,Col} from 'react-bootstrap'
import first from '../../image/image.png'
import second from '../../image/image (2).png'
import third from '../../image/image (3).png'
import four from '../../image/image (4).png'
import twitter from '../../image/Vector.png'
import lin from '../../image/linkedin.png'
import google from '../../image/Vector (2).png'

import Review from '../Review/Review'
const Team = () => {
    return (
        <div>
            <div className='team' id='Team'>
                <h1 className='team_header'>Our Expert Team Members</h1>
                <div className="team_text">
                    This new-found knowledge may then be used by engineers to
create new tools and machines.
                </div>


<Container>
    <Row>
        <Col md='3' sm='6'>
            <div className="team_info">
                <div className="team_pic">
                    <img src={first}/>
                </div>
                <div className="team_name">Nattasha</div>
                <div className="team_job">Web Developer</div>
                <div className="team_links">
                <a href='https://www.linkedin.com/signup/cold-join'> <img src={lin}/></a>
                <a href="https://twitter.com/?lang=ru"><img src={twitter}/></a>
                            

                <a href="#"> <img src={google}/></a>
                            </div>
            </div>
        </Col>
        <Col md='3' sm='6'>
            <div className="team_info">
                <div className="team_pic">
                    <img src={second}/>
                </div>
                <div className="team_name">John Doe</div>
                <div className="team_job">Web Designer</div>
                <div className="team_links">
                <a href='https://www.linkedin.com/signup/cold-join'> <img src={lin}/></a>
                <a href="https://twitter.com/?lang=ru"><img src={twitter}/></a>
                            
                <a href="#"> <img src={google}/></a>
                            </div>
            </div>
        </Col>
        <Col md='3' sm='6'> 
            <div className="team_info">
                <div className="team_pic">
                    <img src={third}/>
                </div>
                <div className="team_name">Haris Milas</div>
                <div className="team_job">Ceo & Co-Funder</div>
                <div className="team_links">
                <a href='https://www.linkedin.com/signup/cold-join'> <img src={lin}/></a>
                <a href="https://twitter.com/?lang=ru"><img src={twitter}/></a>
                            
                <a href="#"> <img src={google}/></a>
                            </div>
            </div>
        </Col>
        <Col md='3' sm='6'>
            <div className="team_info">
                <div className="team_pic">
                    <img src={four}/>
                </div>
                <div className="team_name">Nelson Mecoy</div>
                <div className="team_job">Marketing Manager</div>
                <div className="team_links">
                <a href='https://www.linkedin.com/signup/cold-join'> <img src={lin}/></a>
                <a href="https://twitter.com/?lang=ru"><img src={twitter}/></a>
                            
                <a href="#"> <img src={google}/></a>
                            </div>
            </div>
        </Col>

    </Row>
</Container>

                 </div>
                 <Review/>
        </div>
    );
};

export default Team;