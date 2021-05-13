import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Servises from '../components/Servises';
import FeaturedRooms from '../components/FeaturedRooms';
export default function Home() {
    return(<> <Hero>
        <Banner title="Luxurios rooms" subtitle="deluxe starting at 249$">
            <Link to='/rooms' className="btn-primary">
                our rooms
            </Link>

        </Banner>
    </Hero>
    <Servises/>
    <FeaturedRooms/>

    </>
    );
}
