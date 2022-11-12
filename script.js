const root = ReactDOM.createRoot(document.getElementById('root'))

function Button() {
    return <button>Hustlers University</button>
} 

function Header() {
    return <h2>AndrewTate</h2>
}

function Text() {
    return <p>Emory Andrew Tate III je americko-britská internetová osobnost a bývalý profesionální kickboxer. Po své kariéře kickboxu začal Tate nabízet placené kurzy a členství prostřednictvím svých webových stránek a později se proslavil jako online influencer.</p>
}

function Image() {
    return <img src="https://pbs.twimg.com/media/Fa217C6WYAA6mRy.jpg" alt="cat" />
}

function Card() {
    return <div>
        <Header />
        <Image />
        <Text />
        <Button />
    </div>
}

function CardPack() {
    return <>
        <Card />
        <Card />
        <Card />
    </>
}

root.render(<CardPack />)