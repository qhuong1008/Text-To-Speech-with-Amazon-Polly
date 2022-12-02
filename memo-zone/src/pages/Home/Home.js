import style from './style.scss'
import AppHeader from "../../components/AppHeader";
import data from '../../data'
import Course from '../../components/Course'

const Home = () => {
    var vonglap = 5;
    return (
        <div class="home-container"> 
      <AppHeader />
    <h1>Các khoá học</h1>
    {
       data.map(item=> { 
        var courseid = item.courseId
        return <>
        <Course biengido={courseid}/>
        <br/>
        </>
       })
    }
      </div>
    )
}

export default Home;