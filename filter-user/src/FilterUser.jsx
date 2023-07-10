import { useEffect, useState,useRef } from "react";
import ListElement from "./ListElement";


const FilterUser = () => {
    const [users, setUsers] = useState(null);
    // yedeklenen dizi
    const [cloneUsers, setCloneUsers]=useState(null);
    // inputun referansını almak
    const inputRef=useRef();
    // içindeki fonksiyon bileşen ekrana geldiği anda çalışır componentDidMount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            // olumlu cevabın işlenmesi
            .then((res) => res.json())
            // işlenmiş verinin state'e aktarılması
            .then((data) => {setUsers(data)
            setCloneUsers(data)
            })
            .catch((err) => alert("Daha sonra tekrar deneyiniz.."));
    }, [])

    const handleSearch=()=>{
        // inputun değerini alma ve küçük harfe çevirme
        const query =inputRef.current.value.toLowerCase();
        // aratılan terime sahip olan kullanıcıları yeni bir diziye filterele. Filtreleme işlemi yedek dizide yapılmalı
        const filteredUser=cloneUsers.filter((user)=>user.name.toLowerCase().includes(query));
        // state'in güncellenmesi
        setUsers(filteredUser);
        
    }
    return (
        <div>
            <h1>Kullanıcılar</h1>
            <input type="text" ref={inputRef} onChange={handleSearch} />
            <button onClick={handleSearch} >Ara</button>
            <ul>
                {/* eğer kullanıcılar boşsa loading yaz */}
                {users === null && <p>Loading...</p>}
                {/* eğer kullanıcılar varsa listele */}
                {/*  user prop'unun gönderilmesi */}
                {users && users.map((user)=><ListElement user={user} /> 
                   
                )}


            </ul>
        </div>
    )
}
export default FilterUser;