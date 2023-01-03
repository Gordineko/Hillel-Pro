import React, {Component, useEffect, useState} from 'react';
import './App.css';
import Loader from "../Loader/Loader";
import api from '../../api'

function App() {
    const [albums, setAlbums] = useState([])
    const [album, setAlbum] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        api.get('albums').then(({data}) => {
            console.log(data)
            setAlbums(data)
        })
    }, [])
    const getAlbum = (id) => {
        setLoading(true)
        setAlbum([])
        setTimeout(() => {
            api.get(`photos?albumId=${id}`)
                .then(({data}) => setAlbum(data))
                .finally(() => setLoading(false))
        }, 2000)
    }

    return (
        <div className="App">
            <div className="row">
                <div className="col">
                    {albums.map((item) => (
                        <div key={item.id} onClick={() => getAlbum(item.id)} className="item">{item.id} {item.title}</div>
                    ))}
                </div>
                <div className="col">
                    <Loader isLoading={loading}></Loader>
                    <div className="col__album">
                        {album.map((item) => (
                            <div key={item.id} className="card">
                                <img src={item.thumbnailUrl}
                                     alt={item.title}
                                     className="card__img"/>
                                <p className="card__title">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
