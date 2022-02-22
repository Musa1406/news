import logo from './logo2.jpg';
import './App.css';
import PrimarySearchAppBar from './toolbox/PrimarySearchAppBar';
import DataTable from './toolbox/DataTable';
import FixedBottomNavigation from './toolbox/FixedBottomNavigation';
import RecipeReviewCard from './toolbox/RecipeReviewCard';
import BasicRating from './toolbox/BasicRating';
import ToggleButtonNotEmpty from './toolbox/ToggleButtonNotEmpty';
import PlaygroundSpeedDial from './toolbox/PlaygroundSpeedDial';
import DividerStack from './toolbox/DividerStack';
import TemporaryDrawer from './toolbox/TemporaryDrawer';


function App() {
  return (
    <div className="App">
      <DividerStack/> 
    <PrimarySearchAppBar/>
    <ToggleButtonNotEmpty/>
    <TemporaryDrawer/>
    <PlaygroundSpeedDial/>
    <DataTable/>
    <BasicRating/>
    <FixedBottomNavigation/>
    <RecipeReviewCard/>
    <ToggleButtonNotEmpty/>
    </div>
  );
}

export default App;
