import { Route, Routes, Navigate} from "react-router-dom";
import {Signup} from "./components/Singup/Signup";
import {Signin} from "./components/Login/Signin";
import MainDashboard from "./components/Main/dashboard";
import Nav1 from "./components/Header/nav1";
import Profile from "./components/Profile/profile";
import BMI from "./components/BMI/bmicalc";
import FavouriteItems from "./components/Favourite/favourites";
import Foot from "./components/Footer/footer";

function App() {
	const user = localStorage.getItem("token");

	return (

		<div>
			<Nav1 />
			<Routes>
				{<Route path="/home" exact element={<MainDashboard />} />}
				<Route path="/Signup" exact element={<Signup />} />
				<Route path="/Signin" exact element={<Signin />} />
				<Route path="/" element={<MainDashboard/>} />
				<Route path="/profile" element={<Profile/>} />
				<Route path="/bmi" element={<BMI/>}/>
				<Route path="/fav" element={<FavouriteItems/>}/>
			</Routes>
			<Foot/>
		</div>

	);
}

export default App;

