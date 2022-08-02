import { render, screen } from '@testing-library/react';
import Nav1 from './components/Header/nav1';
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

    test('Login and Register Button should be there in nav bar', ()=> {
        render(<BrowserRouter><Nav1/></BrowserRouter>);
        expect(screen.getByText('Login','Register')).toBeInTheDocument();
    });

    
});