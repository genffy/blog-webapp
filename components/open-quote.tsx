import { useEffect, useState } from "react"

const OpenQuote = () => {
    const [data, setData] = useState(null as any);
    useEffect(() => {
        fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(quote => {
                setData(quote)
            })
    }, []);

    if (!data) {
        return null
    }

    return <div className="uk-card uk-card-default uk-card-small">
        <div className="uk-text-center@s uk-card-body">
            <p><span data-uk-icon="icon: quote-right;ratio: 2" style={{ transform: 'rotate(180deg)' }}></span>{data.quote}</p>
            <div className="uk-text-right">{data.character}</div>
        </div>
    </div>
}

export default OpenQuote