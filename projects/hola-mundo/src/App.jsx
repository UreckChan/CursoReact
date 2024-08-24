import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'UreckGG',
        name:'Ureck',
        isFollowing: true
    },
    {
        userName: 'SrCosmicCat',
        name:'Komikat',
        isFollowing: false
    },
    {
        userName: 'lemon_sowa',
        name:'soda',
        isFollowing: true
    },
]

export function App (){


    return (
        <section className='App'>

        {/* <TwitterFollowCard userName="UreckGG" initialIsFollowing={true} >
            Ureck
        </TwitterFollowCard>
        <TwitterFollowCard userName="SrCosmicCat" >
            Komikat
        </TwitterFollowCard> */}
        {    
            users.map(user =>{
                const { userName, name, isFollowing} = user
                return(
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                        </TwitterFollowCard>
                 )
                
            })
        }
        
        </section>
    )
}
