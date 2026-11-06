import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
    const [fraza, setFraza] = useState('');
    const [wybranyDzial, setWybranyDzial] = useState('');

    const pracownicy = [
    { id: 1, imie: 'Anna', nazwisko: 'Kowalska', dzial: 'IT', pensja: 7200 },
    { id: 2, imie: 'Piotr', nazwisko: 'Nowak', dzial: 'Sprzedaż', pensja: 5400 },
    { id: 3, imie: 'Maria', nazwisko: 'Wiśniewska', dzial: 'Księgowość', pensja: 6100 },
    { id: 4, imie: 'Jan', nazwisko: 'Kowalczyk', dzial: 'IT', pensja: 8300 },
    { id: 5, imie: 'Katarzyna', nazwisko: 'Zielińska', dzial: 'Sprzedaż', pensja: 5900 },
    { id: 6, imie: 'Tomasz', nazwisko: 'Szymański', dzial: 'IT', pensja: 9100 },
    { id: 7, imie: 'Agnieszka', nazwisko: 'Woźniak', dzial: 'Księgowość', pensja: 6400 },
    { id: 8, imie: 'Michał', nazwisko: 'Kaczmarek', dzial: 'Sprzedaż', pensja: 5200 },
    { id: 9, imie: 'Magdalena', nazwisko: 'Mazur', dzial: 'IT', pensja: 7800 },
    { id: 10, imie: 'Paweł', nazwisko: 'Krawczyk', dzial: 'Księgowość', pensja: 6000 },
    { id: 11, imie: 'Joanna', nazwisko: 'Piotrowska', dzial: 'Sprzedaż', pensja: 5600 },
    { id: 12, imie: 'Łukasz', nazwisko: 'Grabowski', dzial: 'IT', pensja: 8700 }
  ];

  function filtrujPracownikow(tekst, dzial){
    const szukanaFraza = tekst.trim().toLowerCase();

    return pracownicy.filter((pracownik) => {
        const pasujeNazwisko = pracownik.nazwisko.toLowerCase().includes(szukanaFraza)

        const pasujeDzialu =
        dzial === '' || pracownik.dzial === dzial;

        return pasujeNazwisko && pasujeDzialu;
    });
  }

  const pasujacyPracownicy = filtrujPracownikow(
    fraza,
    wybranyDzial
  );

  function obsluzZmianeFrazy(event) {
    const nowaFraza = event.target.value;
    setFraza(nowaFraza);

    const wyniki = filtrujPracownikow(
      nowaFraza,
      wybranyDzial
    );
    console.log(`Wyniki: ${wyniki.length}`);
  }
}

return(<main className="container py-4">
    <h2 className="mb-4">Pracownicy</h2>

    <div className="mb-3">
    <label htmlFor="szukaj" className="form-label">
        Szukaj:
    </label>

    <input
        type="text"
        className="form-control"
        id="szukaj"
        value={fraza}
        onChange={obsluzZmianeFrazy}
    />
    </div>

    <div className="mb-3">
        <label htmlFor="dzial" className="form-label">
          Dział:
        </label>

        <select
          className="form-select"
          id="dzial"
          value={wybranyDzial}
          onChange={obsluzZmianeDzialu}
        >
          <option value="">Wszystkie</option>
          <option value="IT">IT</option>
          <option value="Sprzedaż">Sprzedaż</option>
          <option value="Księgowość">Księgowość</option>
        </select>
        
      </div>
      <p className="mb-3">
        Liczba pracowników: {pasujacyPracownicy.length}
      </p>

      {pasujacyPracownicy.length > 0 ? (
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Imię</th>
              <th scope="col">Nazwisko</th>
              <th scope="col">Dział</th>
              <th scope="col">Pensja</th>
            </tr>
          </thead>

          <tbody>
            {pasujacyPracownicy.map((pracownik) => (
              <tr key={pracownik.id}>
                <td>{pracownik.imie}</td>
                <td>{pracownik.nazwisko}</td>
                <td>{pracownik.dzial}</td>
                <td>{pracownik.pensja}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning" role="alert">
          Brak pracowników spełniających kryteria
        </div>
      )}
    </main>
  );


export default App;