import './Newsletter.scss'
import { useState, useEffect } from 'react';


export default function Newsletter() {


  const [modal, setModal] = useState(false);
  const [emailNews, setEmailNews] = useState('')

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setModal(true);
        sessionStorage.popupModal = 1;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(emailNews)
  closeModal();
}

  return (
    <section id="newsletter">
      {modal ? (
        <div className="modal-news">
          <img className="logo-blanc" src="/images/logo_blanc.png"></img>
          <p>Abonnez-vous à mon infolettre !</p>
          <input type="email" name="email" placeholder="courriel" onChange={(e) => setEmailNews(e.target.value)}></input>
          <button className="btn-news" type="submit" onClick={handleSubmit}>Soumettre</button>
        </div>
      ) : "" }
    </section>
  )
}