import { render, screen } from '@testing-library/react';
import Nav1 from './components/Header/nav1';
import MainDashboard from './components/Main/dashboard';
import Foot from './components/Footer/footer';
import BMI from './components/BMI/bmicalc';
import FavouriteItems from './components/Favourite/favourites';
import { BrowserRouter } from 'react-router-dom';



describe('testing app', ()=> {


    test('navigation bar should contain a Brand Name', ()=> {
        render(<BrowserRouter><Nav1/></BrowserRouter>);
        expect(screen.getByText('Nutrition Plus')).toBeInTheDocument();
    });

    test('navigation bar must have a Home button', ()=> {
        render(<BrowserRouter><Nav1/></BrowserRouter>);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    test('Login Button should be there in nav bar', ()=> {
        render(<BrowserRouter><Nav1/></BrowserRouter>);
        expect(screen.getByText('Login')).toBeInTheDocument();
    });

    test('Register Button should be there in nav bar', ()=> {
        render(<BrowserRouter><Nav1/></BrowserRouter>);
        expect(screen.getByText('Register')).toBeInTheDocument();
    });


    test('Footer Rendered', ()=> {
        render(<Foot/>);
        expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    });

    test('should have container class in main dashboard', ()=> {
        render(<BrowserRouter><MainDashboard/></BrowserRouter>);
        expect(screen.getByTestId('itemBox')).toHaveClass('container');
    });

    test('Search Bar Rendered', ()=> {
        render(<BrowserRouter><MainDashboard/></BrowserRouter>);
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

    test('BMI container is Rendered', ()=> {
        render(<BMI/>);
        expect(screen.getByTestId('bmi-container')).toHaveClass('ap');
    });

    test('Heading in BMI component Rendered', ()=> {
        render(<BMI/>);
        expect(screen.getByText('Check your BMI')).toHaveClass('Heading');
    });

    test('Favourites Heading should be present', ()=> {
        render(<BrowserRouter><FavouriteItems/></BrowserRouter>);
        expect(screen.getByText('Your Favourites')).toBeInTheDocument();
    });

    test('Favourites component should contain a GO-Back button', ()=> {
        render(<BrowserRouter><FavouriteItems/></BrowserRouter>);
        expect(screen.getByText('Go Back')).toBeInTheDocument();
    });

    test('in Favourites component Card is rendered with class grid', ()=> {
        render(<BrowserRouter><FavouriteItems/></BrowserRouter>);
        expect(screen.getByTestId('cards')).toHaveClass('grid');
    });








    
});