import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        userName: 'alejoSantos29',
        name: 'Alejandro Santos Jaimes',
        isFollowing: true,
    },
    {
        userName: 'bonnysantos19',
        name: 'Bonny Alexander Santos',
        isFollowing: false,
    },
    {
        userName: 'alexajaimes23',
        name: 'Alexandra Jaimes',
        isFollowing: true,
    },
    {
        userName: 'joseluissantosluna',
        name: 'Jose Luis Santos Luna',
        isFollowing: true,
    }
]
export function App() {

    return (
        <section className='app'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        key={userName}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}