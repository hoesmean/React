import React, from {useState} 'react';

export default function Register() {
    const [formData, setformData] = useState({        
        email:"",        
        sifre:""    
    });

    const { email, sifre, } = formData;

    return (
        <div className="register">
            <form>
            
            <label htmlFor="">E Mail</label>              
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            required/>
            
            <label htmlFor="sifre">Şifre</label>            
            <input 
            type="password" 
            name="sifre" 
            id="sifre" 
            value={sifre}
            required/>
            
            <input type="submit" value="Gönder" />
            </form>
        </div>
    )
}
