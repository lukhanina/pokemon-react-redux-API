import React from 'react';
import { Typography, Box } from '@mui/material';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export function About() {
    return (
        <div className='wrapper'>
            <div className='main'>
                <Header />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant='h6' color='inherit' component='div' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '200px 0px'
                    }}>
                        Welcome to the ultimate Pokémon adventure, where React magic meets the enchanting world of Pikachu and friends! Dive into our Pokémon API, where every code line is like a Poké Ball—ready to catch and unleash the wildest Pokémon stats and data.With Lukhanina Hanna at the helm, we've combined our love for coding with our passion for Pokémon. So, whether you’re a seasoned Trainer or just a casual fan, our site is the place where your React components and Pokémon dreams come to life. Just remember, with great code comes great responsibility—don’t let your React components evolve into bugs!

                        Feel free to tweak it if you want to add more specific details or make it fit better with your site's vibe!
                    </Typography>
                </Box>
            </div>
            <Footer />
        </div>
    )
}