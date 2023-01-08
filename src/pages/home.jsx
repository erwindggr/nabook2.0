import {Navibar} from '../components/navibar';
import {Hero} from '../components/hero';
import {CardCont} from '../components/cardcont';
import {Footer} from '../components/footer';
import { useSelector } from 'react-redux';

export const Home = () => {
    const accSelector = useSelector((state) => state.auth);

    return(
        <>
            <Navibar account={accSelector} />
            <Hero/>
            <br/>
            <hr/>
            <CardCont/>
            <br/>
            <hr/>
            <Footer/>
        </>
    )
}