    import React,{useState} from 'react';
    import {Switch,Route,BrowserRouter} from 'react-router-dom'
    import Home from './Home'
    import SolutionLink from './SolutionLink'
    import Business from './Business'
    import Quality from './Quality'
    import Sales from './Sales'
    import Research from './Research'
    import Optimization from './Optimization'
    import Marketing from './Marketing'
    import VideoLink from './VideoLink'
    import CommentBox from './News/Comments';
    import Maps from './Footer/Maps';
    import 'bootstrap/dist/css/bootstrap.min.css';
    const Root = () => {
        
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={()=><Home/>}/>
                <Route exact path='/solution' component={()=><SolutionLink/>}/>
                <Route exact path='/business' component={()=><Business/>}/>
                <Route exact path='/quality' component={()=>< Quality/>}/>
                <Route exact path='/sales' component={()=>< Sales/>}/>
                <Route exact path='/research' component={()=>< Research/>}/>
                <Route exact path='/optimization' component={()=>< Optimization/>}/>
                <Route exact path='/marketing' component={()=>< Marketing/>}/>
                <Route exact path='/video' component={()=>< VideoLink/>}/>
                <Route exact path='/comments' component={()=>< CommentBox />}/>
                <Route exact path='/map' component={()=> < Maps/>}/>

            </Switch>
        </BrowserRouter>
        );
    };

    export default Root;